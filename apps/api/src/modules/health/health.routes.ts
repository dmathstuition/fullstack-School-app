import { Router } from "express";
import { getLiveness, getReadiness } from "./health.controller";

export const healthRouter = Router();

healthRouter.get("/live", getLiveness);
healthRouter.get("/ready", getReadiness);
