import type { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../config/security";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    schoolId?: string;
    roles: string[];
  };
}

export const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const token = authHeader.slice(7);

  try {
    const payload = verifyAccessToken(token);
    req.user = {
      userId: payload.userId,
      schoolId: payload.schoolId,
      roles: payload.roles
    };
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
