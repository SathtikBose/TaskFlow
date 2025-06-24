const express = require("express");
const router = express.Router();

// Import sub-routers
const authRoutes = require("./auth");
const userRoutes = require("./users");
const projectRoutes = require("./projects");
const teamRoutes = require("./teams");
const taskRoutes = require("./tasks");
const commentRoutes = require("./comments");
const fileRoutes = require("./files");
const activityRoutes = require("./activity");
const notificationRoutes = require("./notifications");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/teams", teamRoutes);
router.use("/tasks", taskRoutes);
router.use("/comments", commentRoutes);
router.use("/files", fileRoutes);
router.use("/activity", activityRoutes);
router.use("/notifications", notificationRoutes);

module.exports = router;
