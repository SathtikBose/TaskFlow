// Task model for MySQL
// ...existing code...
const pool = require("../config/db");

const createTask = async (task) => {
  const [result] = await pool.query(
    "INSERT INTO tasks (title, description, status, priority, category, project_id, assignee_id, dependency_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      task.title,
      task.description,
      task.status,
      task.priority,
      task.category,
      task.project_id,
      task.assignee_id,
      task.dependency_id,
    ]
  );
  return result.insertId;
};

const getTasksByProject = async (projectId) => {
  const [rows] = await pool.query("SELECT * FROM tasks WHERE project_id = ?", [
    projectId,
  ]);
  return rows;
};

module.exports = { createTask, getTasksByProject };
