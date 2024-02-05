"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var tasksCtrl = _interopRequireWildcard(require("../controllers/task.controller.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = (0, _express.Router)();
/**
 * @swagger
 *  tags:
 *    name: Tasks
 *    description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 */

router.get("/tasks", tasksCtrl.getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Total tasks counter
 *      tags: [Tasks]
 */
router.get("/tasks/count", tasksCtrl.getTaskCount);

/**
 * @swagger
 * /tasks/:id:
 *  get:
 *      summary: Get a task by id
 *      tags: [Tasks]
 */
router.get("/tasks/:id", tasksCtrl.getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Save a new task
 *      tags: [Tasks]
 */
router.post("/tasks", tasksCtrl.saveTask);

/**
 * @swagger
 * /tasks/:id:
 *  delete:
 *      summary: Delete a task by id
 *      tags: [Tasks]
 */
router["delete"]("/tasks/:id", tasksCtrl.deleteTask);

/**
 * @swagger
 * /tasks/:id:
 *  put:
 *      summary: Update a task by id
 *      tags: [Tasks]
 */
router.put("/tasks/:id", tasksCtrl.updateTask);
var _default = exports["default"] = router;