// Comment controller for threads on tasks and projects
const commentModel = require("../models/comment");

// Add a comment
exports.add = async (req, res, next) => {
  try {
    const { task_id, project_id, content } = req.body;
    const user_id = req.user.id;
    const id = await commentModel.addComment({
      user_id,
      task_id,
      project_id,
      content,
    });
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

// Get comments for a task
exports.listByTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const comments = await commentModel.getCommentsByTask(taskId);
    res.json({ success: true, comments });
  } catch (err) {
    next(err);
  }
};
