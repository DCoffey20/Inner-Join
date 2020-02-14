const express = require("express");
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.get("/api/members/:id", function (req, res) {
    db.Members.findOne({raw : true}).then(function (data) {
      let hbsMember = { member: data };
      res.render("memprof", hbsMember);
    });
  });

  app.post("/api/members", function (req, res) {
    
    db.Burger.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    user_name: req.body.userName,
    gender: req.body.gender,
    email: req.body.email,
    gender_orientation: req.body.genderPref,
    about_me: DataTypes.TEXT,
    password: req.body.password
  }).then(function (results) {
    res.json(results);
  });
});

  app.put("/api/members/:id", function (req, res) {
  console.log("put request" + req.params.id);
  console.log(`${JSON.stringify(req.body)} from put request`)
  db.Members.update({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    user_name: req.body.userName,
    gender: req.body.gender,
    email: req.body.email,
    gender_orientation: req.body.genderPref,
    about_me: DataTypes.TEXT,
    password: req.body.password
  },{
    where: {
      id: req.params.id
    }
  }).then(result => {
    console.log(`from put ${result}`);
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
}