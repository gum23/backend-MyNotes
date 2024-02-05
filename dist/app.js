"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.PORT = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("./config.js"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerOpotions = require("./swaggerOpotions.js");
var _taskRoutes = _interopRequireDefault(require("./routes/task.routes.js"));
var specs = (0, _swaggerJsdoc["default"])(_swaggerOpotions.options);
var app = exports.app = (0, _express["default"])();

//Middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

//routes
app.use(_taskRoutes["default"]);
app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var PORT = exports.PORT = _config["default"].PORT;