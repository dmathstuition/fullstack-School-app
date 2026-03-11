import type { Request, Response } from "express";
import {
  forgotPasswordSchema,
  loginSchema,
  refreshTokenSchema,
  registerSchema,
  resetPasswordSchema,
  verifyEmailSchema
} from "./auth.schemas";
import { forgotPassword, login, logout, refreshSession, register, resetPassword, verifyEmail } from "./auth.service";

const parseOrFail = <T>(result: { success: boolean; data?: T; error?: unknown }, res: Response): T | null => {
  if (!result.success) {
    res.status(400).json({ message: "Validation failed", issues: result.error });
    return null;
  }

  return result.data as T;
};

const respondServiceError = (error: unknown, res: Response): void => {
  const message = error instanceof Error ? error.message : "Operation failed";

  if (message.includes("Invalid credentials") || message.includes("not verified") || message.includes("Invalid refresh token")) {
    res.status(401).json({ message });
    return;
  }

  if (message.includes("expired") || message.includes("revoked")) {
    res.status(401).json({ message });
    return;
  }

  if (message.includes("already in use")) {
    res.status(409).json({ message });
    return;
  }

  res.status(400).json({ message });
};

export const registerHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = parseOrFail(registerSchema.safeParse(req.body), res);
  if (!parsed) return;

  try {
    const result = await register(parsed);
    res.status(201).json(result);
  } catch (error) {
    respondServiceError(error, res);
  }
};

export const loginHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = parseOrFail(loginSchema.safeParse(req.body), res);
  if (!parsed) return;

  try {
    const result = await login(parsed);
    res.status(200).json(result);
  } catch (error) {
    respondServiceError(error, res);
  }
};

export const refreshHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = parseOrFail(refreshTokenSchema.safeParse(req.body), res);
  if (!parsed) return;

  try {
    const result = await refreshSession(parsed);
    res.status(200).json(result);
  } catch (error) {
    respondServiceError(error, res);
  }
};

export const logoutHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = parseOrFail(refreshTokenSchema.safeParse(req.body), res);
  if (!parsed) return;

  const result = await logout(parsed);
  res.status(200).json(result);
};

export const verifyEmailHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = parseOrFail(verifyEmailSchema.safeParse(req.body), res);
  if (!parsed) return;

  try {
    const result = await verifyEmail(parsed);
    res.status(200).json(result);
  } catch (error) {
    respondServiceError(error, res);
  }
};

export const forgotPasswordHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = parseOrFail(forgotPasswordSchema.safeParse(req.body), res);
  if (!parsed) return;

  const result = await forgotPassword(parsed);
  res.status(200).json(result);
};

export const resetPasswordHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = parseOrFail(resetPasswordSchema.safeParse(req.body), res);
  if (!parsed) return;

  try {
    const result = await resetPassword(parsed);
    res.status(200).json(result);
  } catch (error) {
    respondServiceError(error, res);
  }
};
