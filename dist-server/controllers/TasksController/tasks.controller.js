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
  (0, _defineProperty2["default"])(this, "listOne", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var id, taskFromDb;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = req.params.id;
              _context.next = 3;
              return _models.Task.findById({
                id: id
              });

            case 3:
              taskFromDb = _context.sent;
              res.status(200).json({
                task: taskFromDb
              });

            case 5:
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
  (0, _defineProperty2["default"])(this, "insertOne", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body, title, description, duration, cost, status, type, profitable, dueDate, data, newTask;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, title = _req$body.title, description = _req$body.description, duration = _req$body.duration, cost = _req$body.cost, status = _req$body.status, type = _req$body.type, profitable = _req$body.profitable, dueDate = _req$body.dueDate;
              data = {
                title: title,
                description: description,
                duration: duration,
                cost: cost,
                status: status,
                type: type,
                profitable: profitable,
                dueDate: dueDate
              };
              _context2.next = 4;
              return _models.Task.insertOne(data);

            case 4:
              newTask = _context2.sent;
              res.status(200).json({
                newTask: newTask
              });

            case 6:
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
  (0, _defineProperty2["default"])(this, "editOne", function (req, res) {
    var id = req.params.id;
    console.log(req);
  });
  (0, _defineProperty2["default"])(this, "deleteOne", function (req, res) {
    var id = req.params.id;
    console.log(req);
  });
};

var _default = TasksController;
exports["default"] = _default;