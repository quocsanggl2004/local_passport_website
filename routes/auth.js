const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();

// Register
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    await User.create({ username, password });
    res.redirect("/login");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

// Login
router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login"
  })
);

// Profile (protected route)
router.get("/profile", isAuthenticated, (req, res) => {
  res.render("profile", { user: req.user });
});

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/login");
  });
});

// Middleware
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;