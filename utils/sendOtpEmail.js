const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOTPEmail = async (email, otp) => {
  await resend.emails.send({
    from: "Heralds Admin <admin@heraldshub.site>",
    to: [email],
    subject: "Your Admin Login OTP",
    html: `<p>Your login OTP is: <strong>${otp}</strong></p>`,
  });
};

module.exports = sendOTPEmail;
