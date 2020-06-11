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

router.get("/user", users.listAll); //Task

router.get("/tasks", tasks.listAll); //Project

router.get("/projects", projects.listAll);
var _default = router;
exports["default"] = _default;