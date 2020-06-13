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

var _models = require("../../models");

var _utils = require("../../utils");

/* eslint-disable no-console */
var UsersController = function UsersController() {
  (0, _classCallCheck2["default"])(this, UsersController);
  (0, _defineProperty2["default"])(this, "listAll", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var usersFromDb;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _models.User.find();

            case 2:
              usersFromDb = _context.sent;
              res.status(200).json({
                users: usersFromDb
              });

            case 4:
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
  (0, _defineProperty2["default"])(this, "listOne", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var id, userFromDb;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              _context2.next = 3;
              return _models.User.findById({
                id: id
              });

            case 3:
              userFromDb = _context2.sent;
              res.status(200).json({
                user: userFromDb
              });

            case 5:
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
  (0, _defineProperty2["default"])(this, "editOne", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _req$body, name, email, username, currentPassword, newPassword, confirmationNewPassword, userEmailExists, user, password, newObj, prop;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body = req.body, name = _req$body.name, email = _req$body.email, username = _req$body.username, currentPassword = _req$body.currentPassword, newPassword = _req$body.newPassword, confirmationNewPassword = _req$body.confirmationNewPassword;
              _context3.next = 3;
              return _models.User.findOne({
                email: email
              });

            case 3:
              userEmailExists = _context3.sent;

              if (!(userEmailExists && userEmailExists._id.toString() !== req.user.id)) {
                _context3.next = 7;
                break;
              }

              res.status(403).json({
                message: "Email já cadastrado"
              });
              return _context3.abrupt("return");

            case 7:
              _context3.next = 9;
              return _models.User.findById(req.user.id);

            case 9:
              user = _context3.sent;

              if (!(currentPassword && newPassword && confirmationNewPassword)) {
                _context3.next = 27;
                break;
              }

              password = user.password;

              if (_utils.passwordManager.verify(currentPassword, password)) {
                _context3.next = 15;
                break;
              }

              res.status(400).json({
                message: "Senha incorreta"
              });
              return _context3.abrupt("return");

            case 15:
              if (!(newPassword !== confirmationNewPassword)) {
                _context3.next = 18;
                break;
              }

              res.status(400).json({
                message: "Nova senha e confirmação da nova senha precisam ser iguais"
              });
              return _context3.abrupt("return");

            case 18:
              _context3.prev = 18;
              _context3.next = 21;
              return _models.User.findByIdAndUpdate(req.user.id, {
                password: _utils.passwordManager.encrypt(newPassword)
              }, {
                useFindAndModify: true
              });

            case 21:
              _context3.next = 27;
              break;

            case 23:
              _context3.prev = 23;
              _context3.t0 = _context3["catch"](18);
              res.status(500).json({
                message: "Error: Probelma no servidor de banco de dados"
              });
              return _context3.abrupt("return");

            case 27:
              newObj = {
                name: name,
                email: email,
                username: username
              };

              for (prop in newObj) {
                if (!newObj[prop]) delete newObj[prop];
              }

              _context3.prev = 29;
              _context3.next = 32;
              return _models.User.findByIdAndUpdate(req.user.id, newObj, {
                useFindAndModify: true
              });

            case 32:
              res.status(200).json({
                message: 'Usuário atualizado com sucesso'
              });
              _context3.next = 38;
              break;

            case 35:
              _context3.prev = 35;
              _context3.t1 = _context3["catch"](29);
              res.status(500).json({
                message: "Error: Probelma no servidor de banco de dados"
              });

            case 38:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[18, 23], [29, 35]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "deleteOne", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var id;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.user.id;
              _context4.prev = 1;
              _context4.next = 4;
              return _models.User.findByIdAndDelete(id);

            case 4:
              res.status(200).json({
                message: 'Usuário deletado com sucesso'
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](1);
              res.status(500).json({
                message: "Error: Probelma no servidor de banco de dados"
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 7]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

var _default = UsersController;
exports["default"] = _default;