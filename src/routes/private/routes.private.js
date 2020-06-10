import { Router } from "express";
import {
  ProjectsController,
  TasksController,
  UsersController
} from "../../controllers";

const router = Router();

const tasks = new TasksController();
const users = new UsersController();
const projects = new ProjectsController();

//Routes

//User
router.get("/users", users.listAll);
router.get("/user/:id", users.listOne);

//Task
router.get("/tasks", tasks.listAll);

//Project
router.get("/projects", projects.listAll);

export default router;
