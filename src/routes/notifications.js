const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");
const auth = require("../middleware/auth");

// @route   GET /api/v1/notifications
// @desc    Get all notifications for the authenticated user
// @access  Private
router.get("/", auth(), notificationController.getNotifications);

// @route   POST /api/v1/notifications
// @desc    Add a notification (admin/manager only)
// @access  Private
router.post(
  "/",
  auth(["admin", "manager"]),
  notificationController.addNotification
);

module.exports = router;
