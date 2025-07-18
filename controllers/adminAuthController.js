const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const fromEmail = process.env.RESEND_FROM;

let currentOTP = "";
let otpTimestamp = 0; 

exports.loginWithPassword = async (req, res) => {
  const { email, password } = req.body;

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

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

exports.verifyOTP = (req, res) => {
  const { email, otp } = req.body;


  if (Date.now() - otpTimestamp > 5 * 60 * 1000) {
    currentOTP = "";
    return res.status(400).json({ message: "OTP expired" });
  }

  if (email !== adminEmail || otp !== currentOTP) {
    return res.status(401).json({ message: "Invalid OTP or email" });
  }

  currentOTP = "";
  return res.json({ message: "Login success" });
};
