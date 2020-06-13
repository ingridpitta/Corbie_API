"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var TaskSchema = new Schema({
  // user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  project: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Project",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
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
    required: true,
    "enum": ["Backlog", "OnGoing", "Done"],
    "default": "Backlog"
  },
  type: {
    type: String,
    required: true
  },
  profitable: {
    type: Boolean,
    required: true,
    "default": true
  },
  creationDate: {
    type: Date,
    required: true,
    "default": new Date()
  },
  dueDate: {
    type: Date,
    required: true
  }
});

var Task = _mongoose["default"].model("Task", TaskSchema);

var _default = Task;
exports["default"] = _default;