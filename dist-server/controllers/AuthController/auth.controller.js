"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _joi = _interopRequireDefault(require("joi"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _utils = require("../../utils");

var _models = require("../../models");

var AuthController = function AuthController() {
  (0, _classCallCheck2["default"])(this, AuthController);
  (0, _defineProperty2["default"])(this, "signup", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var name, password, email, telephone, signupSchema, validation;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _utils.paramsSchema.name, password = _utils.paramsSchema.password, email = _utils.paramsSchema.email, telephone = _utils.paramsSchema.telephone;
              signupSchema = _joi["default"].object().optional({
                abortEarly: false
              }).keys({
                name: name,
                password: password,
                email: email,
                telephone: telephone
              });
              validation = _joi["default"].validate(req.body, signupSchema);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = AuthController;
exports["default"] = _default;