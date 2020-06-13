"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

module.exports = _mongoose["default"].connect("mongodb://localhost/corbie", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) // eslint-disable-next-line no-console
.then(function () {
  return console.log("Connected to database!");
});