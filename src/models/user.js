// User model for MySQL
// ...existing code...
const pool = require("../config/db");

const createUser = async (user) => {
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [user.name, user.email, user.password, user.role]
  );
  return result.insertId;
};

const findUserByEmail = async (email) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return rows[0];
};

module.exports = { createUser, findUserByEmail };
