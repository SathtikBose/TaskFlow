const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const auth = require("../middleware/auth");

// @route   POST /api/v1/files/upload
// @desc    Upload a file
// @access  Private
router.post("/upload", auth(), fileController.uploadFile);

// @route   GET /api/v1/files/task/:taskId
// @desc    Get files for a task
// @access  Private
router.get("/task/:taskId", auth(), fileController.listByTask);

module.exports = router;
