let db = require("../models");

module.exports = function(app) {

app.get("/memberprofile", function(req, res){
    db.Members.findOne({}).then(function(results){

        res.render("memprof", {memprof: results})
    });

});

app.get("/viewjoins", function(req, res){
    db.Members.findAll({}).then(function(results){

        res.render("viewjoins", {viewjoins: results})
    });
});


}