const path = require("path");
const db = require("../models");

// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.post("/api/signup", function(req, res) {
    db.Members.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    user_name: req.body.userName,
    gender: req.body.gender,
    email: req.body.email,
    gender_orientation: req.body.genderPref,
    about_me: req.body.about_me,
    password: req.body.password

    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
}
