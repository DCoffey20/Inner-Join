const db = require("../models");
const express = require("express");

const picturesRouter = express.Router();

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
    if(!req.body.url){
        res.status(400);
        res.json("Error: URL is required");
    }
    db.profilePics.create({
        url: req.body.url,
        member_id: req.user.id
    }).then(function (results) {
        res.json(results);
    });
});

picturesRouter.get(
    "/api/members/profilePics",
     awaitErorrHandlerFactory(async (req, res, next) => {
        let userPictures = await db.profilePics.findAll({
            raw: true,
            // offset: 0,
            // limit: 20,
            where: {
                member_id: req.user.id
            }
        });
        return res.json({
            error: false,
            data: [userPictures]
        });
    })
);

module.exports = picturesRouter;