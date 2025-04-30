const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");
const { protectRoute } = require("../middleware/auth.middleware");

//router object
const router = express.Router();

//Check auth
router.get("/auth-status", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});


// GET ALL USERS
router.get("/all-users",protectRoute,  getAllUsers);

// CREATE USER 
router.post("/register", registerController);

//LOGIN 
router.post("/login", loginController);

//Logout
// In userRoutes.js or wherever appropriate
router.get("/logout", (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "development" ? "Lax" : "None",
    secure: process.env.NODE_ENV !== "development",
  });
  return res.status(200).json({ success: true, message: "Logged out successfully" });
});


module.exports = router;