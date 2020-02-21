const db = require("../models");
const passport = require("../config/passport");
const express = require("express");

const messagesRouter = express.Router();

const awaitErorrHandlerFactory = middleware => {
    return async (req, res, next) => {
        try {
            await middleware(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

messagesRouter.post("/api/members/viewsjoins/:match_id", function (req, res) {

    db.Messages.create({
        message: req.body,
        sender_id: req.user.id,
        receiver_id: req.params.match_id
    }).then(function (results) {
        res.json(results);
    });
});

messagesRouter.get(
    "/api/members/messages",
    awaitErorrHandlerFactory(async (req, res, next) => {
        let sentMessages = await db.Messages.findAll({
            raw: true,
            // offset: 0,
            // limit: 20,
            where: {
                sender_id: req.user.id
            },
            include: {
                model: db.Members,
                attributes: [first_name, last_name],
                where: {
                    id: receiver_id
                }
            },
            order: ['createdAt', 'DESC'],
        });
        console.log(sentMessages);
        let receivedMessages = await db.Members.findAll({
            raw: true,
            // offset: 0,
            // limit: 20,
            where: {
                receiver_id: req.user.id
            },
            include: {
                model: db.Members,
                attributes: [first_name, last_name],
                where: {
                    id: sender_id
                }
            },
            order: ['createdAt', 'DESC'],
        });
        console.log(receivedMessages)

        return res.json({
            error: false,
            data: [sentMessages, receivedMessages]
        });

    })

);

module.exports = messagesRouter;