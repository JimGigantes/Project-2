/* eslint-disable no-unused-vars */
// Requiring our custom middleware for checking if a user is logged in
const db = require("../models");
const mysql = require("mysql");
const isAuthenticated = require("../config/middleware/isAuthenticated");

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
    const hbsObject = {
      Movie: req
    };
    console.log(hbsObject);
    //res.render("members", req);
    res.render("members");
  });
};
