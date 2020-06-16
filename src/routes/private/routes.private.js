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
router.put("/user/update", users.editOne);
router.delete("/user/delete", users.deleteOne);

//Task
router.get("/tasks", tasks.listAll);
router.get("/task/:id", tasks.listOne);
router.post("/task/new/:id", tasks.insertOne); // Project`s id!!!
router.put("/task/update/:id", tasks.editOne);
router.delete("/task/delete/:id", tasks.deleteOne);

//Project
router.get("/projects", projects.listAll);
router.get("/project/:id", projects.listOne);
router.post("/project/new", projects.insertOne);
router.put("/project/update/:id", projects.editOne);
router.delete("/project/delete/:id", projects.deleteOne);

export default router;
