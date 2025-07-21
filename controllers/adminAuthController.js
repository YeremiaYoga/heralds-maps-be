const { Resend } = require("resend");
const jwt = require("jsonwebtoken");

const resend = new Resend(process.env.RESEND_API_KEY);

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const fromEmail = process.env.RESEND_FROM;
const jwtSecret = process.env.JWT_SECRET;

let currentOTP = "";
let otpTimestamp = 0;

exports.loginWithPassword = async (req, res) => {
  const { email, password } = req.body;

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate OTP 6 digit
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  currentOTP = otp;
  otpTimestamp = Date.now();

  try {
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Admin OTP",
      html: `<p>Your OTP is: <strong>${otp}</strong></p>`,
    });

    return res.json({ message: "OTP sent to email" });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ message: "Failed to send OTP" });
  }
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  const now = Date.now();
  if (
    email !== adminEmail ||
    otp !== currentOTP ||
    now - otpTimestamp > 5 * 60 * 1000
  ) {
    return res.status(401).json({ message: "Invalid or expired OTP" });
  }

  const token = jwt.sign({ email }, jwtSecret, { expiresIn: "1h" });

  res.cookie("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    sameSite: "Lax", 
    maxAge: 60 * 60 * 1000, 
  });

  return res.json({ message: "Login success" });
};
