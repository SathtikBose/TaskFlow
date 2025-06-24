// Activity controller for activity feed
const activityModel = require("../models/activity");

// Add an activity
exports.add = async (req, res, next) => {
  try {
    const { action, target_id, target_type } = req.body;
    const user_id = req.user.id;
    const timestamp = new Date();
    const id = await activityModel.addActivity({
      user_id,
      action,
      target_id,
      target_type,
      timestamp,
    });
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

// Get activity feed for a project
exports.feed = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const feed = await activityModel.getActivityFeed(projectId);
    res.json({ success: true, feed });
  } catch (err) {
    next(err);
  }
};
