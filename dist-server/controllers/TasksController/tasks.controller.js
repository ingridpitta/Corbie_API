"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _models = require("../../models");

/* eslint-disable no-console */
var TasksController = function TasksController() {
  (0, _classCallCheck2["default"])(this, TasksController);
  (0, _defineProperty2["default"])(this, "listAll", function (req, res) {
    _models.Task.find().then(function (data) {
      return res.status(200).json({
        data: data
      });
    })["catch"](function (err) {
      return res.status(500).json({
        error: err.message
      });
    });
  });
  (0, _defineProperty2["default"])(this, "listOne", function (req, res) {
    console.log(req);
  });
  (0, _defineProperty2["default"])(this, "insert", function (req, res) {
    console.log(req);
  });
  (0, _defineProperty2["default"])(this, "editOne", function (req, res) {
    console.log(req);
  });
  (0, _defineProperty2["default"])(this, "delete", function (req, res) {
    console.log(req);
  });
};

var _default = TasksController;
exports["default"] = _default;