require("dotenv").config();
// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

const exphbs = require("express-handlebars");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Requiring our routes

require("./routes/login-routes")(app);

const memberRouter2 = require("./routes/memberRoutes.js");
const memberRouter = require("./controllers/api/members-controller.js");
const languageRouter = require("./controllers/memberlanguages-controller");
const messagesRouter = require("./controllers/messages-controller.js")
const picturesRouter = require("./controllers/profilepics-controller.js");
app.use(memberRouter2);
app.use(memberRouter);
app.use(languageRouter);
app.use(messagesRouter);
app.use(picturesRouter);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
