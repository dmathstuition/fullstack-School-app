import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("Auth endpoints", () => {
  it("supports full auth lifecycle", async () => {
    const registerResponse = await request(app).post("/api/v1/auth/register").send({
      schoolId: "school-001",
      email: "admin@school.edu",
      password: "Password123",
      firstName: "Ada",
      lastName: "Lovelace",
      roles: ["SUPER_ADMIN"]
    });

    expect(registerResponse.status).toBe(201);
    expect(registerResponse.body).toHaveProperty("verificationToken");

    const verifyResponse = await request(app).post("/api/v1/auth/verify-email").send({
      token: registerResponse.body.verificationToken
    });

    expect(verifyResponse.status).toBe(200);

    const loginResponse = await request(app).post("/api/v1/auth/login").send({
      email: "admin@school.edu",
      password: "Password123"
    });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty("accessToken");
    expect(loginResponse.body).toHaveProperty("refreshToken");

    const rbacResponse = await request(app)
      .get("/api/v1/auth/super-admin-only")
      .set("Authorization", `Bearer ${loginResponse.body.accessToken}`);

    expect(rbacResponse.status).toBe(200);

    const refreshResponse = await request(app).post("/api/v1/auth/refresh").send({
      refreshToken: loginResponse.body.refreshToken
    });

    expect(refreshResponse.status).toBe(200);
    expect(refreshResponse.body).toHaveProperty("accessToken");

    const logoutResponse = await request(app).post("/api/v1/auth/logout").send({
      refreshToken: refreshResponse.body.refreshToken
    });

    expect(logoutResponse.status).toBe(200);
  });

  it("supports forgot and reset password", async () => {
    await request(app).post("/api/v1/auth/register").send({
      schoolId: "school-001",
      email: "teacher@school.edu",
      password: "Password123",
      firstName: "Grace",
      lastName: "Hopper",
      roles: ["TEACHER"]
    });

    const forgotResponse = await request(app).post("/api/v1/auth/forgot-password").send({
      email: "teacher@school.edu"
    });

    expect(forgotResponse.status).toBe(200);
    expect(forgotResponse.body).toHaveProperty("resetToken");

    const resetResponse = await request(app).post("/api/v1/auth/reset-password").send({
      token: forgotResponse.body.resetToken,
      newPassword: "NewPassword123"
    });

    expect(resetResponse.status).toBe(200);

    const loginWithNewPassword = await request(app).post("/api/v1/auth/login").send({
      email: "teacher@school.edu",
      password: "NewPassword123"
    });

    expect(loginWithNewPassword.status).toBe(401);
  });

  it("rejects unverified users at login", async () => {
    await request(app).post("/api/v1/auth/register").send({
      schoolId: "school-001",
      email: "student@school.edu",
      password: "Password123",
      firstName: "Linus",
      lastName: "Torvalds",
      roles: ["STUDENT"]
    });

    const loginResponse = await request(app).post("/api/v1/auth/login").send({
      email: "student@school.edu",
      password: "Password123"
    });

    expect(loginResponse.status).toBe(401);
  it("returns tokens on valid login payload", async () => {
    const response = await request(app).post("/api/v1/auth/login").send({
      email: "admin@school.edu",
      password: "Password123!"
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("accessToken");
    expect(response.body).toHaveProperty("refreshToken");
    expect(response.body.user.roles).toContain("SUPER_ADMIN");
  });

  it("returns 400 on invalid login payload", async () => {
    const response = await request(app).post("/api/v1/auth/login").send({
      email: "invalid-email",
      password: "123"
    });

    expect(response.status).toBe(400);
  });
});
