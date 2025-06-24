// File controller for upload and sharing
const fileModel = require("../models/file");
const multer = require("multer");
const path = require("path");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Upload a file
exports.uploadFile = [
  upload.single("file"),
  async (req, res, next) => {
    try {
      const { task_id, project_id } = req.body;
      const user_id = req.user.id;
      const file = {
        user_id,
        task_id,
        project_id,
        filename: req.file.filename,
        path: req.file.path,
      };
      const id = await fileModel.addFile(file);
      res.status(201).json({ success: true, id });
    } catch (err) {
      next(err);
    }
  },
];

// Get files for a task
exports.listByTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const files = await fileModel.getFilesByTask(taskId);
    res.json({ success: true, files });
  } catch (err) {
    next(err);
  }
};
