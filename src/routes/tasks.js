const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const auth = require("../middleware/auth");

// @route   POST /api/v1/tasks
// @desc    Create a new task
// @access  Private (manager/developer)
router.post("/", auth(["manager", "developer"]), taskController.create);

// @route   GET /api/v1/tasks/project/:projectId
// @desc    List all tasks for a project
// @access  Private
router.get("/project/:projectId", auth(), taskController.listByProject);

module.exports = router;
