"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.username = exports.password = exports.email = exports.name = void 0;

var _joi = _interopRequireDefault(require("joi"));

var nameRegex = /^[a-zA-z]/;

var validation = function validation(field, min, max, mask) {
  return {
    language: {
      any: {
        required: "".concat(field, " \xE9 Obrigat\xF3rio"),
        empty: "".concat(field, " \xE9 Obrigat\xF3rio")
      },
      string: {
        min: "".concat(field, ": campo de no m\xEDnimo ").concat(min, " caracteres"),
        required: "".concat(field, " \xE9 Obrigat\xF3rio"),
        max: "".concat(field, ": campo de no m\xE1ximo ").concat(max, " caracteres"),
        email: "Necessário um e-mail válido",
        base: "".concat(field, ": campo do tipo string"),
        regex: {
          base: mask ? "Necess\xE1rio enviar o campo na m\xE1scara ".concat(mask) : ""
        }
      },
      number: {
        base: "".concat(field, ": Campo do tipo num\xE9rico")
      }
    }
  };
};

var name = _joi["default"].string().required().min(3).max(100).regex(nameRegex).options(validation("Nome", 3, 100, "Somente letras maiúsculas ou minúsculas"));

exports.name = name;

var email = _joi["default"].string().required().email().options(validation("Email", undefined, undefined, "example@example.com.br"));

exports.email = email;

var password = _joi["default"].string().required().min(6).max(100).options(validation("Senha", 5, 100));

exports.password = password;

var username = _joi["default"].string().required().min(6).max(10).options(validation("Usuário", 5, 10));

exports.username = username;