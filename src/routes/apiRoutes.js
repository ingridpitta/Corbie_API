import { Router } from "express";
import publicRoutes from "./public/routes.public";
// import privateRoutes from "./private/public.private";

const router = Router();

router.use("/public", publicRoutes);
// router.use("/private", privateRoutes);

export default router;
