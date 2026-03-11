import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "./env";
import type { AuthUser } from "../shared/types/express";

export const hashPassword = (plainText: string): Promise<string> => bcrypt.hash(plainText, env.BCRYPT_ROUNDS);

export const comparePassword = (plainText: string, hash: string): Promise<boolean> => bcrypt.compare(plainText, hash);

export const signAccessToken = (payload: AuthUser): string =>
  jwt.sign(payload, env.JWT_ACCESS_SECRET, { expiresIn: env.JWT_ACCESS_EXPIRES_IN });

export const signRefreshToken = (payload: AuthUser): string =>
  jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: env.JWT_REFRESH_EXPIRES_IN });

export const verifyAccessToken = (token: string): AuthUser =>
  jwt.verify(token, env.JWT_ACCESS_SECRET) as AuthUser;
