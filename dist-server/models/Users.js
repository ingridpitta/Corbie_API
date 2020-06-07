"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  facebookId: String,
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    "enum": ["project manager", "member"],
    "default": "member"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Boolean,
    required: true,
    "default": true
  }
});

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;