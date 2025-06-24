// Comment model for MySQL
// ...existing code...
const pool = require("../config/db");

const addComment = async (comment) => {
  const [result] = await pool.query(
    "INSERT INTO comments (user_id, task_id, project_id, content) VALUES (?, ?, ?, ?)",
    [comment.user_id, comment.task_id, comment.project_id, comment.content]
  );
  return result.insertId;
};

const getCommentsByTask = async (taskId) => {
  const [rows] = await pool.query("SELECT * FROM comments WHERE task_id = ?", [
    taskId,
  ]);
  return rows;
};

module.exports = { addComment, getCommentsByTask };
