const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const { User } = require('../models');

userRouter.post('/register', (req, res) => {
  User.create(req.body).then(user => res.status(201).send(user));
});

//HERE THE ".authenticate" IS A MIDDLEWARE OF PASSPORT WICH USES THE
userRouter.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user);
});

userRouter.post('/logout', (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

userRouter.get('/me', (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

userRouter.use('/', function (req, res) {
  res.sendStatus(404);
});

module.exports = userRouter;
