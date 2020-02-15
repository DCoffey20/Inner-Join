const db = require("../models");
const passport = require("../config/passport");
const express = require("express");

const router = express.Router();

const awaitErorrHandlerFactory = middleware => {
  return async (req, res, next) => {
      try {
          await middleware(req, res, next);
      } catch (err) {
          next(err);
      }
  };
};

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

router.get("/members/:id", function (req, res) {
  db.Members.findOne({
    raw: true,
    where: {
      id: req.params.id
    }
  }).then(function (res) {
    // let hbsMember = { member: data };
    // res.render("memprof", hbsMember);
    console.log(res);
  });
});

router.post("/api/members", function (req, res) {

  db.Members.create({
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

router.put("/api/members/:id", function (req, res) {
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
  }, {
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

router.get(
  "/api/members/:id/matches",

  awaitErorrHandlerFactory(async (req, res, next) => {

      let currentUser = await db.Members.findOne({
          raw: true,
          where: {
              id: req.params.id
          },
          include: {
              model: db.Languages,
              where: {
                  member_id: req.params.id
              }
          }
      });
      console.log(currentUser);
      let userJoins = await db.Members.findAll({
          raw: true,
          where: {
              gender: currentUser.gender_orientation,
              gender_orientation: currentUser.gender
          },
          include: {
              model: db.Languages
          }
      });

return res.json({
  error: false,
  data: userJoins
});

    })
      
  );

module.exports = router;