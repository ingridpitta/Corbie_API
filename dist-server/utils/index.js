"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordManager = exports.paramSchema = void 0;

var _validation = require("./validation");

var _password = _interopRequireDefault(require("./password"));

var paramSchema = {
  name: _validation.name,
  email: _validation.email,
  password: _validation.password,
  telephone: _validation.telephone
};
exports.paramSchema = paramSchema;
var passwordManager = new _password["default"]();
exports.passwordManager = passwordManager;