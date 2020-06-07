"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _routes = _interopRequireDefault(require("./private/routes.private"));

// import publicRoutes from "./public/routes.public";
var router = (0, _express.Router)(); // router.use("/public", publicRoutes);

router.use("/private", _routes["default"]);
var _default = router;
exports["default"] = _default;