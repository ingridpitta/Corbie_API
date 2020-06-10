import { Router } from "express";

import TasksController from "../../controllers/TasksController/tasks.controller";
import UsersController from "../../controllers/UsersController/users.controller";
import ProjectsController from "../../controllers/ProjectsController/projects.controller";

const router = Router();

const tasks = new TasksController();
const users = new UsersController();
const projects = new ProjectsController();

router.get("/tasks", tasks.listAll);
router.get("/users", users.listAll);
router.get("/projects", projects.listAll);

export default router;
