"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _routes = _interopRequireDefault(require("./public/routes.public"));

// import privateRoutes from "./private/public.private";
var router = (0, _express.Router)();
router.use("/public", _routes["default"]); // router.use("/private", privateRoutes);

var _default = router;
exports["default"] = _default;