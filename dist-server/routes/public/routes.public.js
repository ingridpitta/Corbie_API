"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("../../controllers");

var router = (0, _express.Router)();
var authController = new _controllers.AuthController();
router.post("/auth/signup", authController.signup);
router.post("/auth/login", authController.login);
var _default = router;
exports["default"] = _default;