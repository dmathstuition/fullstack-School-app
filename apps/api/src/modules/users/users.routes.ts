import { Router } from "express";
import { requireAuth } from "../../middlewares/auth.middleware";
import { requireRoles } from "../../middlewares/rbac.middleware";
import { listUsersHandler, myProfileHandler, updateUserRolesHandler } from "./users.controller";

export const usersRouter = Router();

usersRouter.get("/me", requireAuth, myProfileHandler);
usersRouter.get("/", requireAuth, requireRoles("SUPER_ADMIN", "SCHOOL_ADMIN"), listUsersHandler);
usersRouter.patch("/:userId/roles", requireAuth, requireRoles("SUPER_ADMIN"), updateUserRolesHandler);
