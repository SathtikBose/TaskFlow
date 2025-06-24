// Notification controller
const notificationModel = require("../models/notification");

// Get all notifications for the authenticated user
exports.getNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationModel.getNotificationsByUser(
      req.user.id
    );
    res.json({ success: true, notifications });
  } catch (err) {
    next(err);
  }
};

// Add a notification (admin/manager only)
exports.addNotification = async (req, res, next) => {
  try {
    const { user_id, message } = req.body;
    const notification = {
      user_id,
      message,
      is_read: false,
      created_at: new Date(),
    };
    const id = await notificationModel.addNotification(notification);
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};
