// Project controller for CRUD and hierarchy/milestones
const projectModel = require("../models/project");

// Create a new project
exports.create = async (req, res, next) => {
  try {
    const { name, description, parent_id, milestone } = req.body;
    const id = await projectModel.createProject({
      name,
      description,
      parent_id,
      milestone,
    });
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

// Get all projects
exports.list = async (req, res, next) => {
  try {
    const projects = await projectModel.getProjects();
    res.json({ success: true, projects });
  } catch (err) {
    next(err);
  }
};
