"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = _interopRequireDefault(require("../../controllers/tasks.controller"));

var _users = _interopRequireDefault(require("../../controllers/users.controller"));

var _projects = _interopRequireDefault(require("../../controllers/projects.controller"));

var router = (0, _express.Router)();
var tasks = new _tasks["default"]();
var users = new _users["default"]();
var projects = new _projects["default"]();
router.get("/tasks", tasks.listAll);
router.get("/users", users.listAll);
router.get("/projects", projects.listAll);
var _default = router;
exports["default"] = _default;