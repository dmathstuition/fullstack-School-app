import {
  comparePassword,
  createOpaqueToken,
  hashPassword,
  hashToken,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken
} from "../../config/security";
import { authRepository } from "./auth.repository";
import type {
  ForgotPasswordInput,
  LoginInput,
  RefreshTokenInput,
  RegisterInput,
  ResetPasswordInput,
  VerifyEmailInput
} from "./auth.schemas";

const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const EMAIL_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;
const RESET_TOKEN_TTL_MS = 30 * 60 * 1000;

const issueTokenPair = async (payload: { userId: string; schoolId: string; roles: string[] }) => {
  const accessToken = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);
  const refreshTokenHash = hashToken(refreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_TTL_MS);

  await authRepository.saveRefreshToken(refreshTokenHash, payload.userId, expiresAt);

  return { accessToken, refreshToken };
};

export const register = async (input: RegisterInput) => {
  const existing = await authRepository.getUserByEmail(input.email);
  if (existing) {
    throw new Error("Email already in use");
  }

  const passwordHash = await hashPassword(input.password);
  const user = await authRepository.createUser({
    schoolId: input.schoolId,
    email: input.email,
    passwordHash,
    firstName: input.firstName,
    lastName: input.lastName,
    roles: input.roles
  });

  const emailToken = createOpaqueToken();
  await authRepository.saveEmailVerificationToken(emailToken, user.id, new Date(Date.now() + EMAIL_TOKEN_TTL_MS));

  return {
    message: "Registration successful. Verify your email to activate the account.",
    user: {
      id: user.id,
      email: user.email,
      roles: user.roles,
      isEmailVerified: user.isEmailVerified
    },
    verificationToken: emailToken
  };
};

export const login = async (input: LoginInput) => {
  const user = await authRepository.getUserByEmail(input.email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await comparePassword(input.password, user.passwordHash);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  if (!user.isEmailVerified) {
    throw new Error("Email not verified");
  }

  const tokens = await issueTokenPair({ userId: user.id, schoolId: user.schoolId, roles: user.roles });

  return {
    ...tokens,
    user: {
      id: user.id,
      schoolId: user.schoolId,
      email: user.email,
      roles: user.roles
    }
  };
};

export const refreshSession = async (input: RefreshTokenInput) => {
  let payload;
  try {
    payload = verifyRefreshToken(input.refreshToken);
  } catch {
    throw new Error("Invalid refresh token");
  }

  const stored = await authRepository.getRefreshToken(hashToken(input.refreshToken));
  if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
    throw new Error("Refresh token expired or revoked");
  }

  await authRepository.revokeRefreshToken(stored.tokenHash);

  return issueTokenPair({
    userId: payload.userId,
    schoolId: payload.schoolId ?? "",
    roles: payload.roles
  });
};

export const logout = async (input: RefreshTokenInput) => {
  await authRepository.revokeRefreshToken(hashToken(input.refreshToken));
  return { message: "Logged out successfully" };
};

export const verifyEmail = async (input: VerifyEmailInput) => {
  const verificationRecord = await authRepository.consumeEmailVerificationToken(input.token);
  if (!verificationRecord || verificationRecord.expiresAt < new Date()) {
    throw new Error("Invalid or expired verification token");
  }

  const user = await authRepository.getUserById(verificationRecord.userId);
  if (!user) {
    throw new Error("User not found");
  }

  user.isEmailVerified = true;
  await authRepository.updateUser(user);

  return { message: "Email verified successfully" };
};

export const forgotPassword = async (input: ForgotPasswordInput) => {
  const user = await authRepository.getUserByEmail(input.email);
  if (!user) {
    return { message: "If the account exists, a password reset link has been sent." };
  }

  const resetToken = createOpaqueToken();
  await authRepository.savePasswordResetToken(resetToken, user.id, new Date(Date.now() + RESET_TOKEN_TTL_MS));

  return {
    message: "If the account exists, a password reset link has been sent.",
    resetToken
  };
};

export const resetPassword = async (input: ResetPasswordInput) => {
  const resetRecord = await authRepository.consumePasswordResetToken(input.token);
  if (!resetRecord || resetRecord.expiresAt < new Date()) {
    throw new Error("Invalid or expired reset token");
  }

  const user = await authRepository.getUserById(resetRecord.userId);
  if (!user) {
    throw new Error("User not found");
  }

  user.passwordHash = await hashPassword(input.newPassword);
  await authRepository.updateUser(user);

  return { message: "Password reset successful" };
};
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
