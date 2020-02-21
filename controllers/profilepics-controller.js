const db = require("../models");
const express = require("express");

const picfturesRouter = express.Router();

const awaitErorrHandlerFactory = middleware => {
    return async (req, res, next) => {
        try {
            await middleware(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

picturesRouter.post("/api/members/profilePictures", function (req, res) {

    db.profilePictures.create({
        url: response.url,
        member_id: req.user.id
    }).then(function (results) {
        res.json(results);
    });
});

picturesRouter.get(
    "/api/members/profilePictures",
     db.profilePictures.findAll({
        raw: true,
        where: {
          member_id: req.user.id
        },
     })

);

module.exports = picturesRouter;