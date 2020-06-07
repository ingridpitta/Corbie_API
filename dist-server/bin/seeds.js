"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var tasksList = [{
  name: "task teste",
  description: "primeira task teste",
  duration: 8
}];

_mongoose["default"].connect("mongodb://localhost/corbie", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // eslint-disable-next-line no-console
.then(function () {
  return console.log("Connected to database!");
});

_Tasks["default"].insertMany(tasksList).then(function () {
  console.log("Tasks inserted");

  _mongoose["default"].connection.close();
});