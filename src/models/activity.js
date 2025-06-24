// Activity model for MySQL
// ...existing code...
const pool = require("../config/db");

const addActivity = async (activity) => {
  const [result] = await pool.query(
    "INSERT INTO activity (user_id, action, target_id, target_type, timestamp) VALUES (?, ?, ?, ?, ?)",
    [
      activity.user_id,
      activity.action,
      activity.target_id,
      activity.target_type,
      activity.timestamp,
    ]
  );
  return result.insertId;
};

const getActivityFeed = async (projectId) => {
  const [rows] = await pool.query(
    'SELECT * FROM activity WHERE target_id = ? AND target_type = "project" ORDER BY timestamp DESC',
    [projectId]
  );
  return rows;
};

module.exports = { addActivity, getActivityFeed };
