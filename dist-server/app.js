"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _apiRoutes = _interopRequireDefault(require("./routes/apiRoutes"));

require("dotenv").config();

require("./database/mongoose");

var App = function App() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, App);
  (0, _defineProperty2["default"])(this, "middlewares", function () {
    _this.app.use(_express["default"]["static"](__dirname + "/public"));

    _this.app.use(_express["default"].json());

    _this.app.use((0, _cors["default"])({
      origin: [process.env.URL_DEV, process.env.URL_PROD],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }));
  });
  (0, _defineProperty2["default"])(this, "routes", function () {
    _this.app.use("/api", _apiRoutes["default"]); // this.app.use((req, res) => {
    //   res.sendFile(__dirname + "/public/index.html");
    // });

  });
  this.app = (0, _express["default"])();
  this.middlewares();
  this.routes();
};

var _default = App;
exports["default"] = _default;