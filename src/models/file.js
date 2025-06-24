// File model for MySQL
// ...existing code...
const pool = require("../config/db");

const addFile = async (file) => {
  const [result] = await pool.query(
    "INSERT INTO files (user_id, task_id, project_id, filename, path) VALUES (?, ?, ?, ?, ?)",
    [file.user_id, file.task_id, file.project_id, file.filename, file.path]
  );
  return result.insertId;
};

const getFilesByTask = async (taskId) => {
  const [rows] = await pool.query("SELECT * FROM files WHERE task_id = ?", [
    taskId,
  ]);
  return rows;
};

module.exports = { addFile, getFilesByTask };
