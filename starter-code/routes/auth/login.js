"use strict";

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/Users");

/* GET user login page */
router.get("/", (req, res, next) => {
  console.log("Hit the login page!");
  res.render("login");
});

router.post("/", (req, res, next) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10).then(hash => {
    return User.create({
      username: username,
      email: email,
      password: hash
    }).then(user => {
      res.send(user);
    });
  });
});

// res.render('login');



module.exports = router;
