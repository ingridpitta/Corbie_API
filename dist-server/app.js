"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _apiRoutes = _interopRequireDefault(require("./routes/apiRoutes.js"));

var App = function App() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, App);
  (0, _defineProperty2["default"])(this, "middlewares", function () {
    _this.app.use(_express["default"].json());
  });
  this.app = (0, _express["default"])();
  this.middlewares(); // this.routes();
} //   routes = () => {
//     this.app.use("/api", apiRoutes);
//   };
;

var _default = new App().app;
exports["default"] = _default;