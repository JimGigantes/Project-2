/* eslint-disable no-unused-vars */
// Requiring our custom middleware for checking if a user is logged in
const db = require("../models");
const mysql = require("mysql");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { title } = require("process");

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
    /* console.log("here we are at the members route");
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    //console.log(req.query);
    db.Movie.findAll({
      where: query,
      include: [db.User]
    })
      .then(movies => {
        console.log("lolzord");
        //console.log("this is inside the app");
        //console.log(movies);
        const lol = [{
          title: "GI JOE: Silent Killers",
          plot: "While US Forces withdraw from Iraq, GI JOE continues to eliminate enemy threats throughout the country, until they finally encounter Cobra. As GI JOE has its focus on enemy terrorist ...",
          watched: true
        }];
        //const obj = { Movie: data };
        
      })
      .catch(err => {
        res.status(500).json(err);
      }); */
  });
};
