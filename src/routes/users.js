const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

// @route   GET /api/v1/users/profile
// @desc    Get current user profile
// @access  Private
router.get("/profile", auth(), userController.profile);

module.exports = router;
