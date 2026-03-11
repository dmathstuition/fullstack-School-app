import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("Auth endpoints", () => {
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
