import { Router } from "express";
import TasksController from "../controllers/tasks.controller";

const router = Router();
const tasks = new TasksController();

router.get("/", tasks.listAll());

export default router;
