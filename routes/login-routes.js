const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/memberprofile");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/memberprofile");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // app.get("/memberprofile", isAuthenticated, function(req, res){
  //   id = req.user.id;
  //   let userData = await app.get("/api/members", function (req, res) {
  //     db.Members.findOne({
  //       raw: true,
  //       where: {
  //         id: req.user.id
  //       }
  //     })
  //   });
  //   let hbsObject = {
  //     member: userData
  //   };
  //   console.log(hbsObject);
  //   res.render("memprof", hbsObject);
  // });

  app.get("/viewjoins", function(req, res){

    res.sendFile(path.join(__dirname, "../public/viewjoins.html"))
   });

}