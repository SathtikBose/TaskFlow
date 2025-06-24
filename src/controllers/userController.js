// User controller for registration, login, and user management
const userModel = require("../models/user");
const { hashPassword, comparePassword } = require("../utils/password");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const existing = await userModel.findUserByEmail(email);
    if (existing)
      return res.status(409).json({ message: "Email already exists" });
    const hashed = await hashPassword(password);
    const id = await userModel.createUser({
      name,
      email,
      password: hashed,
      role,
    });
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

// Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    // Set JWT as httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    next(err);
  }
};

// Get current user profile
exports.profile = async (req, res, next) => {
  try {
    const user = await userModel.findUserByEmail(req.user.email);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};
