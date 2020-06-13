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
      var name, username, password, email, signupSchema, validation, errors, userExist;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _utils.paramSchema.name, username = _utils.paramSchema.username, password = _utils.paramSchema.password, email = _utils.paramSchema.email;
              console.log({
                paramSchema: _utils.paramSchema,
                body: req.body
              });
              signupSchema = _joi["default"].object().options({
                abortEarly: false
              }).keys({
                name: name,
                password: password,
                email: email,
                username: username
              });
              validation = _joi["default"].validate(req.body, signupSchema);

              if (!validation.error) {
                _context.next = 8;
                break;
              }

              errors = validation.error.details.map(function (error) {
                return {
                  error: error.message,
                  field: error.context.key
                };
              });
              res.status(400).json(errors);
              return _context.abrupt("return");

            case 8:
              _context.next = 10;
              return _models.User.findOne({
                email: req.body.email
              });

            case 10:
              userExist = _context.sent;

              if (!userExist) {
                _context.next = 14;
                break;
              }

              res.status(400).json({
                message: "Usuário já cadastrado"
              });
              return _context.abrupt("return");

            case 14:
              req.body.password = _utils.passwordManager.encrypt(req.body.password);
              _context.next = 17;
              return _models.User.create(req.body);

            case 17:
              res.status(200).json({
                message: "Usuário cadastrado com sucesso"
              });

            case 18:
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
  (0, _defineProperty2["default"])(this, "login", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body, username, password, userFromDb, isPasswordValid, token, refreshToken;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, username = _req$body.username, password = _req$body.password;
              _context2.next = 3;
              return _models.User.findOne({
                username: username
              });

            case 3:
              userFromDb = _context2.sent;

              if (userFromDb) {
                _context2.next = 7;
                break;
              }

              res.status(400).json({
                message: "Credenciais não conferem"
              });
              return _context2.abrupt("return");

            case 7:
              isPasswordValid = _utils.passwordManager.verify(password, userFromDb.password);

              if (isPasswordValid) {
                _context2.next = 11;
                break;
              }

              res.status(401).json({
                message: "Credenciais não conferem"
              });
              return _context2.abrupt("return");

            case 11:
              token = _jsonwebtoken["default"].sign({
                name: userFromDb.name,
                email: userFromDb.email,
                id: userFromDb._id
              }, process.env.JWT_TOKEN, {
                expiresIn: process.env.JWT_TOKEN_EXPIRATION
              });
              refreshToken = _jsonwebtoken["default"].sign({
                name: userFromDb.name,
                email: userFromDb.email,
                id: userFromDb._id,
                token: token
              }, process.env.JWT_TOKEN, {
                expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION
              });
              res.status(200).json({
                type: "Bearer",
                token: token,
                refreshToken: refreshToken
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

var _default = AuthController;
exports["default"] = _default;