const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");

// @route   POST /api/v1/projects
// @desc    Create a new project
// @access  Private (admin/manager)
router.post("/", auth(["admin", "manager"]), projectController.create);

// @route   GET /api/v1/projects
// @desc    List all projects
// @access  Private
router.get("/", auth(), projectController.list);

module.exports = router;
