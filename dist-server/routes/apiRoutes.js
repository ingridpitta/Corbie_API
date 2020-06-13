"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _routes = _interopRequireDefault(require("./public/routes.public"));

var _routes2 = _interopRequireDefault(require("./private/routes.private"));

var router = (0, _express.Router)();
router.use("/public", _routes["default"]);
router.use("/private", _routes2["default"]);
var _default = router;
exports["default"] = _default;