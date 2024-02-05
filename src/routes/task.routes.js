import { Router } from 'express';
const router = Router();

import * as tasksCtrl from '../controllers/task.controller.js';

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
router.delete("/tasks/:id", tasksCtrl.deleteTask);

/**
 * @swagger
 * /tasks/:id:
 *  put:
 *      summary: Update a task by id
 *      tags: [Tasks]
 */
router.put("/tasks/:id", tasksCtrl.updateTask);

export default router;