const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");
const auth = require("../middleware/auth");

// @route   POST /api/v1/teams
// @desc    Create a new team
// @access  Private (admin/manager)
router.post("/", auth(["admin", "manager"]), teamController.create);

// @route   POST /api/v1/teams/assign
// @desc    Assign user to team with role
// @access  Private (admin/manager)
router.post("/assign", auth(["admin", "manager"]), teamController.assign);

module.exports = router;
