"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  body: {
    type: String,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)("tasks", taskSchema);