import type { Request, Response } from "express";
import type { AuthenticatedRequest } from "../../middlewares/auth.middleware";
import { getUserById, listUsers, updateUserRoles } from "./users.service";
import { updateUserRolesSchema } from "./users.schemas";

const handleError = (error: unknown, res: Response): void => {
  const message = error instanceof Error ? error.message : "Operation failed";
  const status = message === "User not found" ? 404 : 400;
  res.status(status).json({ message });
};

export const listUsersHandler = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const users = await listUsers(req.user?.schoolId);
    res.status(200).json({ users });
  } catch (error) {
    handleError(error, res);
  }
};

export const myProfileHandler = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  const userId = req.user?.userId;

  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const user = await getUserById(userId);
    res.status(200).json({ user });
  } catch (error) {
    handleError(error, res);
  }
};

export const updateUserRolesHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = updateUserRolesSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ message: "Validation failed", issues: parsed.error.flatten() });
    return;
  }

  try {
    const result = await updateUserRoles(req.params.userId, parsed.data);
    res.status(200).json(result);
  } catch (error) {
    handleError(error, res);
  }
};
