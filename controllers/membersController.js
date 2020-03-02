const db = require("../models");

exports.getMemberProfile = async function (req, res) {
    id = req.user.id;
    // let userData = await app.get("/api/members/:id", function (req, res) {
    let member = await db.Members.findOne({
        raw: true,
        where: {
            id: req.user.id
        }
    });
    let hbsObject = {
        member: member
    };
    console.log(hbsObject);
    res.render("memprof", hbsObject);
};