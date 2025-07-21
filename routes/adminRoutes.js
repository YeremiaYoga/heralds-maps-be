const express = require("express");
const router = express.Router();
const { loginWithPassword, verifyOTP } = require("../controllers/adminAuthController");
const authenticateJWT = require("../middlewares/authenticateJWT");


router.post("/login", loginWithPassword);

router.post("/verify-otp", verifyOTP);


router.get("/secure", authenticateJWT, (req, res) => {
  res.json({ message: `Welcome admin ${req.user.email}` });
});

module.exports = router;