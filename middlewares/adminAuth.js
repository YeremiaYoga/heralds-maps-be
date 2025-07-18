const dotenv = require("dotenv");
dotenv.config();

function adminAuth(req, res, next) {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = adminAuth;
