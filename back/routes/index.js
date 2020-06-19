const express = require("express");
const router = express.Router();
const User = require("../models");
const passport = require("passport");

router.post("/user/register", (req, res, next) => {
  User.create(req.body).then((user) => {
    res.send(user);
  });
});

router.post("/user/login", passport.authenticate("local"), function (
  req,
  res,
  next
) {
  res.json(req.user);
});

router.post("/user/logout", function (req, res) {
  if (req.isAuthenticated()) {
    req.logout();
  }
  res.sendStatus(200);
});

module.exports = router;
