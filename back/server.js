const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes");
const db = require("./models/db");
const volleyball = require("volleyball");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");

app.use(volleyball);

app.use(express.static(__dirname + "/public"));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(session({ secret: "bootcamp" }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (inputEmail, inputPassword, done) {
      User.findOne({ where: { email: inputEmail } })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validPassword(inputPassword)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

app.use("/", router);

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("escuchando en el puerto 3000");
    });
  })
  .catch(console.log);
