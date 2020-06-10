"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../../controllers/AuthController/auth.controller"));

var router = (0, _express.Router)();
var authController = new _auth["default"]();
router.get("/auth/signup", authController.signup);
router.get("/auth/login", authController.login);
var _default = router;
exports["default"] = _default;