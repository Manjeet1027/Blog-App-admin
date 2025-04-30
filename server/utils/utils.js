const jwt = require("jsonwebtoken");

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
  

  res.cookie("jwt", token, {
    maxAge:   60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.DEV !== "development",
  }).status(200)
  .json({ success: true, message: "Login successful" });


  return token;
};

module.exports = { generateToken };
