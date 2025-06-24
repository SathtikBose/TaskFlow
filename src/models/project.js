// Project model for MySQL
// ...existing code...
const pool = require("../config/db");

const createProject = async (project) => {
  const [result] = await pool.query(
    "INSERT INTO projects (name, description, parent_id, milestone) VALUES (?, ?, ?, ?)",
    [project.name, project.description, project.parent_id, project.milestone]
  );
  return result.insertId;
};

const getProjects = async () => {
  const [rows] = await pool.query("SELECT * FROM projects");
  return rows;
};

module.exports = { createProject, getProjects };
