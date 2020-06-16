"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../../controllers");

var router = (0, _express.Router)();
var tasks = new _controllers.TasksController();
var users = new _controllers.UsersController();
var projects = new _controllers.ProjectsController(); //Routes
//User

router.get("/users", users.listAll);
router.get("/user/:id", users.listOne);
router.put("/user/update", users.editOne);
router["delete"]("/user/delete", users.deleteOne); //Task

router.get("/tasks", tasks.listAll);
router.get("/task/:id", tasks.listOne);
router.post("/task/new/:id", tasks.insertOne); // Project`s id!!!

router.put("/task/update/:id", tasks.editOne);
router["delete"]("/task/delete/:id", tasks.deleteOne); //Project

router.get("/projects", projects.listAll);
router.get("/project/:id", projects.listOne);
router.post("/project/new", projects.insertOne);
router.put("/project/update/:id", projects.editOne);
router["delete"]("/project/delete/:id", projects.deleteOne);
var _default = router;
exports["default"] = _default;