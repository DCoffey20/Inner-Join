const db = require("../models");
const express = require("express");

const languageRouter = express.Router();

const awaitErorrHandlerFactory = middleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

languageRouter.post("/api/members/languages", function (req, res) {
  console.log(`${JSON.stringify(req.body)} from put request`)
  db.Languages.create({
    member_id: req.body.member_id,
    javascript: req.body.javascript,
    c: req.body.c,
    csharp: req.body.csharp,
    java: req.body.java,
    ruby: req.body.ruby,
    php: req.body.php,
    swift: req.body.swift,
    cPlusPlus: req.body.cPlusPlus,
    r: req.body.r,
    perl: req.body.perl,
    assembly: req.body.assembly,
    html: req.body.html,
    css: req.body.css,
    python: req.body.python,
    objectiveC: req.body.objectiveC,
  }).then(function (results) {
    res.json(results);
  });
});

languageRouter.put("/api/members/languages", function (req, res) {
  console.log("put request" + req.user.id);
  console.log(`${JSON.stringify(req.body)} from put request`)
  db.Languages.update({
    javascript: req.body.javascript,
    c: req.body.c,
    csharp: req.body.csharp,
    java: req.body.java,
    ruby: req.body.ruby,
    php: req.body.php,
    swift: req.body.swift,
    cPlusPlus: req.body.cPlusPlus,
    r: req.body.r,
    perl: req.body.perl,
    assembly: req.body.assembly,
    html: req.body.html,
    css: req.body.css,
    python: req.body.python,
    objectiveC: req.body.objectiveC,
  }, {
      where: {
        member_id: req.user.id
      }
    }
  ).then(result => {
    console.log(`from put ${result}`);
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


languageRouter.get("/api/members/languages", function (req, res) {
  db.Languages.findOne({
    raw: true,
    where: {
      member_id: req.user.id
    }
  }).then(function (res) {
    res.json(res);
  });
});

module.exports = languageRouter;