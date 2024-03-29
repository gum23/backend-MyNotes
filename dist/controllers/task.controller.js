"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.saveTask = exports.getTasks = exports.getTaskCount = exports.getTask = exports.deleteTask = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _taskSchema = _interopRequireDefault(require("../schema/task.schema.js"));
var getTasks = exports.getTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var task;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _taskSchema["default"].find();
        case 3:
          task = _context.sent;
          if (task) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(204).json());
        case 6:
          res.status(200).send(task);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getTaskCount = exports.getTaskCount = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tasks, taskCount;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _taskSchema["default"].find();
        case 3:
          tasks = _context2.sent;
          taskCount = tasks.length;
          res.status(200).json(taskCount);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json("Error de servidor");
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getTaskCount(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getTask = exports.getTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var taskFound;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _taskSchema["default"].findById(req.params.id);
        case 3:
          taskFound = _context3.sent;
          if (taskFound) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(204).json());
        case 6:
          res.status(200).json(taskFound);
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json("Error de servidor");
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var saveTask = exports.saveTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var taskData, task, _saveTask;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          taskData = req.body;
          task = new _taskSchema["default"](taskData);
          _context4.next = 5;
          return task.save();
        case 5:
          _saveTask = _context4.sent;
          res.status(200).json(_saveTask);
          _context4.next = 12;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json("Error de servidor");
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function saveTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteTask = exports.deleteTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var taskFound;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _taskSchema["default"].findByIdAndDelete(req.params.id);
        case 3:
          taskFound = _context5.sent;
          if (taskFound) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(204).json());
        case 6:
          res.status(200).json({
            Delete: taskFound
          });
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json("Error de servidor");
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateTask = exports.updateTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var taskUpdate;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _taskSchema["default"].findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          });
        case 2:
          taskUpdate = _context6.sent;
          if (taskUpdate) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", res.status(204).json());
        case 5:
          res.status(200).json({
            update: taskUpdate
          });
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();