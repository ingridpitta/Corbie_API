"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _models = require("../models");

var _utils = require("../utils");

var _mongoose = _interopRequireDefault(require("mongoose"));

var tasksList = [{
  title: "task teste",
  description: "primeira task teste",
  duration: 8,
  cost: 0,
  status: "OnGoing",
  type: "Planning",
  profitable: true,
  dueDate: new Date(),
  project: "5ee927a8145ad11e5b404b20"
}];
var usersList = [{
  name: "ingrid pitta",
  username: "ingridpitta",
  password: _utils.passwordManager.encrypt("123456"),
  role: "project manager",
  email: "ingridpitta@email.com"
}];
var projectsList = [{
  title: "primeiro projeto",
  description: "projeto teste",
  hourPrice: 60,
  duration: 120,
  cost: 0,
  status: "ONGOING",
  dueDate: new Date(),
  user: "5ee92748acef231df1584a41"
}];

_mongoose["default"].connect("mongodb://localhost/corbie", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // eslint-disable-next-line no-console
.then(function () {
  return console.log("Connected to database!");
}); // User.insertMany(usersList).then(() => {
//   console.log("Users inserted");
//   mongoose.connection.close();
// });
// Project.insertMany(projectsList).then(() => {
//   console.log("Projects inserted");
//   mongoose.connection.close();
// });
// Task.insertMany(tasksList).then(() => {
//   console.log("Tasks inserted");
//   mongoose.connection.close();
// });