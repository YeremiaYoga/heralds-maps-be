const express = require("express");
const router = express.Router();
const { loginWithPassword, verifyOTP } = require("../controllers/adminAuthController");

router.post("/login", loginWithPassword);      // Step 1
router.post("/verify-otp", verifyOTP);         // Step 2

module.exports = router;
