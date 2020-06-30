"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  hourPrice: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: false
  },
  status: {
    type: String,
    "enum": ["BACKLOG", "ONGOING", "DONE", "CANCELED"],
    "default": "BACKLOG"
  },
  creationDate: {
    type: Date,
    required: true,
    "default": new Date()
  },
  dueDate: {
    type: Date,
    required: true
  },
  user: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "User",
    required: true
  }
});

var Project = _mongoose["default"].model("Project", projectSchema);

var _default = Project;
exports["default"] = _default;