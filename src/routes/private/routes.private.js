import { Router } from "express";
import jwt from "jsonwebtoken";
import {
  ProjectsController,
  TasksController,
  UsersController
} from "../../controllers";

const router = Router();

const tasks = new TasksController();
const users = new UsersController();
const projects = new ProjectsController();

const protectedRouteMiddleware = (req, res, next) => {
  const token = req.get("Authorization") || req.get("authorization");

  if (!token) {
    res.status(401).json({ message: "Token not found" });

    return;
  }

  try {
    const user = jwt.verify(token.split(" ")[1], process.env.JWT_TOKEN);

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "jwt expired" });
  }
};

router.use(protectedRouteMiddleware);

//Routes

//User
router.get("/users", users.listAll);
router.get("/user", users.listOne);
router.put("/user", users.editOne);
router.delete("/user", users.deleteOne);

//Task
router.get("/tasks/:id", tasks.listAll); // Project`s id!!!
router.get("/task/:id", tasks.listOne);
router.post("/task/:id", tasks.insertOne); // Project`s id!!!
router.put("/task/:id", tasks.editOne);
router.delete("/task/:id", tasks.deleteOne);

//Project
router.get("/projects", projects.listAll);
router.get("/project/:id", projects.listOne);
router.post("/project", projects.insertOne);
router.put("/project/:id", projects.editOne);
router.delete("/project/:id", projects.deleteOne);

//Token
router.get("/refresh-token", (req, res) => {
  const { name, email, id } = req.user;

  const token = jwt.sign({ name, email, id }, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_TOKEN_EXPIRATION
  });

  const refresh_token = jwt.sign(
    { name, email, id, token },
    process.env.JWT_TOKEN,
    { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION}
  );

  res.status(200).json({
    type: "Bearer",
    token,
    refresh_token
  });
});

router.get("/verify-token", (req, res) => {
  res.status(200).json({ message: "OK" });
});

export default router;
