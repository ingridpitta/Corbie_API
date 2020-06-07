"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = _interopRequireDefault(require("../../controllers/tasks.controller"));

var router = (0, _express.Router)();
var tasks = new _tasks["default"]();
router.get("/tasks", tasks.listAll);
var _default = router;
exports["default"] = _default;