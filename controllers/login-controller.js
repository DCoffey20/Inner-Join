const path = require("path");
const db = require("../models");

// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.post("/api/signup", function(req, res) {
    db.Members.create({
      email: req.body.email,
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
