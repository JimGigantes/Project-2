// Requiring our custom middleware for checking if a user is logged in
const orm = require("../config/orm.js");
const express = require("express");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = express.Router();

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("signup");
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("login");
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/members", isAuthenticated, (req, res) => {
  res.render("members");
  orm.all(data => {
    const hbsObject = {
      Movie: data
    };
    console.log(hbsObject);
    res.render("members", hbsObject);
  });
});

module.exports = router;
