const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const auth = require("../middleware/auth");

// @route   POST /api/v1/activity
// @desc    Add an activity
// @access  Private
router.post("/", auth(), activityController.add);

// @route   GET /api/v1/activity/project/:projectId
// @desc    Get activity feed for a project
// @access  Private
router.get("/project/:projectId", auth(), activityController.feed);

module.exports = router;
