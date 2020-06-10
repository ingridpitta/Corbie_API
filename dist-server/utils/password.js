"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var PasswordManager = function PasswordManager() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, PasswordManager);
  (0, _defineProperty2["default"])(this, "encrypt", function (password) {
    var salt = _bcrypt["default"].genSaltSync(_this.saltRounds);

    return _bcrypt["default"].hashSync(password, salt);
  });
  (0, _defineProperty2["default"])(this, "verify", function (password, passwordFromDb) {
    return _bcrypt["default"].compareSync(password, passwordFromDb);
  });
  this.saltRounds = 10;
};

var _default = PasswordManager;
exports["default"] = _default;