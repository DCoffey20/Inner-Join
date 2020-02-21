const path = require("path");

// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/memberprofile", function(req, res){

    res.sendFile(path.join(__dirname, "../public/memprof.html"));
  });

  app.get("/survey", function(req, res){

    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/viewjoins", function(req, res){

    res.sendFile(path.join(__dirname, "../public/viewjoins.html"))
   });

}