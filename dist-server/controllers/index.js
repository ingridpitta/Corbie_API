"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AuthController", {
  enumerable: true,
  get: function get() {
    return _auth["default"];
  }
});
Object.defineProperty(exports, "ProjectsController", {
  enumerable: true,
  get: function get() {
    return _projects["default"];
  }
});
Object.defineProperty(exports, "TasksController", {
  enumerable: true,
  get: function get() {
    return _tasks["default"];
  }
});
Object.defineProperty(exports, "UsersController", {
  enumerable: true,
  get: function get() {
    return _users["default"];
  }
});

var _auth = _interopRequireDefault(require("./AuthController/auth.controller"));

var _projects = _interopRequireDefault(require("./ProjectsController/projects.controller"));

var _tasks = _interopRequireDefault(require("./TasksController/tasks.controller"));

var _users = _interopRequireDefault(require("./UsersController/users.controller"));