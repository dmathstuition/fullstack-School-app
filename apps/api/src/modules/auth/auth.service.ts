import { signAccessToken, signRefreshToken } from "../../config/security";
import type { LoginInput } from "./auth.schemas";

export const login = async (input: LoginInput) => {
  const roles = input.email.includes("admin") ? ["SUPER_ADMIN"] : ["TEACHER"];

  const payload = {
    userId: "seed-user-id",
    schoolId: "seed-school-id",
    roles
  };

  return {
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload),
    user: {
      id: payload.userId,
      schoolId: payload.schoolId,
      roles,
      email: input.email
    }
  };
};
