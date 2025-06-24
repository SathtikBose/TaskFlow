// Team controller for team creation and role assignment
const teamModel = require("../models/team");

// Create a new team
exports.create = async (req, res, next) => {
  try {
    const { name, project_id } = req.body;
    const id = await teamModel.createTeam({ name, project_id });
    res.status(201).json({ success: true, id });
  } catch (err) {
    next(err);
  }
};

// Assign user to team with role
exports.assign = async (req, res, next) => {
  try {
    const { user_id, team_id, role } = req.body;
    await teamModel.assignUserToTeam(user_id, team_id, role);
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};
