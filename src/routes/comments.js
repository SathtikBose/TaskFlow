const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const auth = require("../middleware/auth");

// @route   POST /api/v1/comments
// @desc    Add a comment
// @access  Private
router.post("/", auth(), commentController.add);

// @route   GET /api/v1/comments/task/:taskId
// @desc    Get comments for a task
// @access  Private
router.get("/task/:taskId", auth(), commentController.listByTask);

module.exports = router;
