const { body, param, validationResult } = require('express-validator');

// Example: validation for user registration
const registerValidation = [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 8 }).withMessage('Password min 8 chars'),
  body('name').notEmpty().withMessage('Name required'),
];

// Middleware to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports = { registerValidation, validate };
