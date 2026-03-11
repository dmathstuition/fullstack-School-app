import type { Request, Response } from "express";
import { loginSchema } from "./auth.schemas";
import { login } from "./auth.service";

export const loginHandler = async (req: Request, res: Response): Promise<void> => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ message: "Validation failed", issues: parsed.error.flatten() });
    return;
  }

  const result = await login(parsed.data);
  res.status(200).json(result);
};
