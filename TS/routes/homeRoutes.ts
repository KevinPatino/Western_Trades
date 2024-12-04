import { Router } from "express";
import { getLandingPage } from "../controllers/homeController";

const router = Router();

router.get("/", getLandingPage);

export default router;