const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { registerValidation, validate } = require("../middleware/validation");

// @route   POST /api/v1/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerValidation, validate, userController.register);

// @route   POST /api/v1/auth/login
// @desc    Login user
// @access  Public
router.post("/login", userController.login);

module.exports = router;
