import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("Users endpoints", () => {
  it("allows super admin to list users and update roles", async () => {
    const registerResponse = await request(app).post("/api/v1/auth/register").send({
      schoolId: "school-users",
      email: "superadmin@school.edu",
      password: "Password123",
      firstName: "Super",
      lastName: "Admin",
      roles: ["SUPER_ADMIN"]
    });

    await request(app).post("/api/v1/auth/verify-email").send({ token: registerResponse.body.verificationToken });

    const loginResponse = await request(app).post("/api/v1/auth/login").send({
      email: "superadmin@school.edu",
      password: "Password123"
    });

    const token = loginResponse.body.accessToken;

    const listResponse = await request(app).get("/api/v1/users").set("Authorization", `Bearer ${token}`);
    expect(listResponse.status).toBe(200);
    expect(Array.isArray(listResponse.body.users)).toBe(true);

    const targetUserId = listResponse.body.users[0].id;

    const patchResponse = await request(app)
      .patch(`/api/v1/users/${targetUserId}/roles`)
      .set("Authorization", `Bearer ${token}`)
      .send({ roles: ["SCHOOL_ADMIN"] });

    expect(patchResponse.status).toBe(200);
    expect(patchResponse.body.user.roles).toContain("SCHOOL_ADMIN");
  });

  it("returns profile for authenticated user", async () => {
    const registerResponse = await request(app).post("/api/v1/auth/register").send({
      schoolId: "school-profile",
      email: "teacher2@school.edu",
      password: "Password123",
      firstName: "Test",
      lastName: "Teacher",
      roles: ["TEACHER"]
    });

    await request(app).post("/api/v1/auth/verify-email").send({ token: registerResponse.body.verificationToken });

    const loginResponse = await request(app).post("/api/v1/auth/login").send({
      email: "teacher2@school.edu",
      password: "Password123"
    });

    const meResponse = await request(app)
      .get("/api/v1/users/me")
      .set("Authorization", `Bearer ${loginResponse.body.accessToken}`);

    expect(meResponse.status).toBe(200);
    expect(meResponse.body.user.email).toBe("teacher2@school.edu");
  });
});
