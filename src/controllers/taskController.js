// Task controller for CRUD, status, priority, category, dependencies
const taskModel = require("../models/task");

// Create a new task
exports.create = async (req, res, next) => {
  try {
    const {
      title,
      description,
      status,
      priority,
      category,
      project_id,
      assignee_id,
      dependency_id,
    } = req.body;
    const id = await taskModel.createTask({
      title,
      description,
      status,
      priority,
      category,
      project_id,
      assignee_id,
      dependency_id,
    });
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

// Get all tasks for a project
exports.listByProject = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const tasks = await taskModel.getTasksByProject(projectId);
    res.json({ success: true, tasks });
  } catch (err) {
    next(err);
  }
};
