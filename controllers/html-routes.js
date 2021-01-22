// Requiring our custom middleware for checking if a user is logged in
const express = require("express");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = express.Router();
const movies = require("../models/movies.js");

router.get("/members", (req, res) => {
  movies.all(data => {
    const hbsObject = {
      Movie: data
    };
    console.log(hbsObject);
    res.render("members", hbsObject);
  });
});

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });
};
