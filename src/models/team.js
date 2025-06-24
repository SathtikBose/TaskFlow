// Team model for MySQL
// ...existing code...
const pool = require("../config/db");

const createTeam = async (team) => {
  const [result] = await pool.query(
    "INSERT INTO teams (name, project_id) VALUES (?, ?)",
    [team.name, team.project_id]
  );
  return result.insertId;
};

const assignUserToTeam = async (userId, teamId, role) => {
  await pool.query(
    "INSERT INTO team_members (user_id, team_id, role) VALUES (?, ?, ?)",
    [userId, teamId, role]
  );
};

module.exports = { createTeam, assignUserToTeam };
