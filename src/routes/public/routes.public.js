import { Router } from "express";
import { AuthController } from "../../controllers";

const router = Router();
const authController = new AuthController();

router.get("/auth/signup", authController.signup);
router.get("/auth/login", authController.login);

export default router;
