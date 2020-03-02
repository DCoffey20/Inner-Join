const express = require("express");
const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

const memberController = require("../controllers/membersController");

router.get("/memberprofile", isAuthenticated, memberController.getMemberProfile);

module.exports = router;