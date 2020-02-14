const express = require("express");
const db = require("../models");
const passport = require("../config/passport");
const router = express.Router();

router.get("/api/members/:id", function (req, res) {
  db.Members.findOne({raw : true}).then(function (data) {
    let hbsBurger = { burgers: data };
    res.render("index", hbsBurger);
  });
});

router.post("/api/members", function (req, res) {
  
  db.Burger.create({
    : req.body.name,
    devoured: false
  }).then(function (results) {
    res.json(results);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  // let beenEaten = { devoured: true };
  console.log("put request" + req.params.id);
  console.log(`${JSON.stringify(req.body)} from put request`)
  db.Burger.update({
   devoured: req.body.devoured
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

// Export routes for server.js to use.
module.exports = router;
