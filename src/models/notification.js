// Notification model for MySQL
// ...existing code...
const pool = require("../config/db");

const addNotification = async (notification) => {
  const [result] = await pool.query(
    "INSERT INTO notifications (user_id, message, is_read, created_at) VALUES (?, ?, ?, ?)",
    [
      notification.user_id,
      notification.message,
      notification.is_read,
      notification.created_at,
    ]
  );
  return result.insertId;
};

const getNotificationsByUser = async (userId) => {
  const [rows] = await pool.query(
    "SELECT * FROM notifications WHERE user_id = ?",
    [userId]
  );
  return rows;
};

module.exports = { addNotification, getNotificationsByUser };
