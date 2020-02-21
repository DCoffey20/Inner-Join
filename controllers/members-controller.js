const db = require("../models");
const passport = require("../config/passport");
const express = require("express");

const memberRouter = express.Router();

function compare(personA, personB){
  let comparison = 0;
  if (personA.joinScore > personB.joinScore) {
    comparison = 1;
  } else if (personA.joinScore < personA.joinScore) {
    comparison = -1;
  }
  return comparison;
}

const awaitErorrHandlerFactory = middleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

//Probably needs to be moved to login controller
memberRouter.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

memberRouter.get("/api/members/:id", function (req, res) {
  db.Members.findOne({
    raw: true,
    where: {
      id: req.params.id
    }
  }).then(function (res) {
    let hbsMember = { member: data };
    res.render("memprof", hbsMember);
    console.log(res);
  });
});

memberRouter.post("/api/members", function (req, res) {

  db.Members.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    email: req.body.email,
    gender: req.body.gender,
    gender_orientation: req.body.gender_orientation,
    about_me: req.body.about_me,
    password: req.body.password
  }).then(function() {
    res.redirect(307, "/api/login");
  })
  .catch(function(err) {
    res.status(401).json(err);
  });
});

memberRouter.put("/api/members/:id", function (req, res) {
  console.log("put request" + req.params.id);
  console.log(`${JSON.stringify(req.body)} from put request`)
  db.Members.update({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    user_name: req.body.userName,
    email: req.body.email,
    gender: req.body.gender,
    gender_orientation: req.body.gender_orientation,
    about_me: req.body.about_me,
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

memberRouter.get(
  "/api/members/:id/matches",

  awaitErorrHandlerFactory(async (req, res, next) => {

    let currentUser = await db.Members.findOne({
      raw: true,
      where: {
        id: req.params.id
      },
      include: {
        model: db.Languages
      }
    });
    console.log(currentUser);
    let userJoinsPool = await db.Members.findAll({
      raw: true,
      where: {
        gender: currentUser.gender_orientation,
        gender_orientation: currentUser.gender
      },
      include: {
        model: db.Languages
      }
    });

    
    userJoinsPool.map((element) => {
      return element.joinScore = 0;
   });
   
   
      
      userJoinsPool.forEach(element => {
        console.log(currentUser);
        console.log(element);
        if(currentUser['Languages.javascript'] && element['Languages.javascript']) {
          element.joinScore++
        };
        if(currentUser['Languages.c'] && element['Languages.c']){
          element.joinScore++
        };
        if(currentUser['Languages.csharp'] && userJoinsPool['Languages.csharp']) {
          userJoinsPool.joinScore++
        };
        if(currentUser['Languages.java'] && element['Languages.java']) {
          element.joinScore++
        };
        if(currentUser['Languages.ruby'] && element['Languages.ruby']) {
          element.joinScore++
        };
        if(currentUser['Languages.php'] && element['Languages.php']) {
          element.joinScore++
        };
        if(currentUser['Languages.swift'] && element['Languages.swift']) {
          element.joinScore++
        };
        if(currentUser['Languages.cPlusPlus'] && element['Languages.cPlusPlus']) {
          element.joinScore++
        };
        if(currentUser['Languages.r'] && element['Languages.r']) {
          element.joinScore++
        };
        if(currentUser['Languages.perl'] && element['Languages.perl']) {
          element.joinScore++
        };
        if(currentUser['Languages.assembly'] && element['Languages.assembly']) {
          element.joinScore++
        };
        if(currentUser['Languages.html'] && element['Languages.html']) {
          element.joinScore++
        };
        if(currentUser['Languages.css'] && element['Languages.css']) {
          element.joinScore++
        };
        if(currentUser['Languages.python'] && element['Languages.python']) {
          element.joinScore++
        };
        if(currentUser['Languages.objectiveC'] && element['Languages.objectiveC']) {
          element.joinScore++
        };
        
      });

   userJoinsPool.sort(compare);

    return res.json({
      error: false,
      data: [currentUser, userJoinsPool]
    });

  })

);

memberRouter.delete("/api/members/:id", function (req, res) {
  
  db.Members.destroy({
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

module.exports = memberRouter;