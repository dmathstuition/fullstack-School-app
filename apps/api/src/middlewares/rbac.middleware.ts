import type { NextFunction, Response } from "express";
import type { AuthenticatedRequest } from "./auth.middleware";

export const requireRoles = (...allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const roles = req.user?.roles ?? [];
    const hasRole = roles.some((role) => allowedRoles.includes(role));

    if (!hasRole) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    next();
  };
};
