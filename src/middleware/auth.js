const jwt = require("jsonwebtoken");

module.exports = (roles = []) => {
  if (typeof roles === "string") roles = [roles];
  return (req, res, next) => {
    // Only use httpOnly cookie for auth
    const token = req.cookies && req.cookies.token;
    if (!token) return res.status(401).json({ message: "No token provided" });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      if (roles.length && !roles.includes(user.role)) {
        return res
          .status(403)
          .json({ message: "Forbidden: insufficient role" });
      }
      req.user = user;
      next();
    });
  };
};
