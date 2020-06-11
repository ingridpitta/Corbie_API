import { Router } from "express";
import { AuthController } from "../../controllers";

const router = Router();
const authController = new AuthController();

router.post("/auth/signup", authController.signup);
router.post("/auth/login", authController.login);

export default router;
