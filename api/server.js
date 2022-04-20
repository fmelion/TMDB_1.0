// Configuración del server
const express = require('express');
const http = require('http');
const { User } = require('./models');

const app = express();

const db = require('./db');

const bodyParser = require('body-parser');
const routes = require('./routes');
const morgan = require('morgan');

const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

app.use(bodyParser.json()); //applies to all routes
app.use(bodyParser.urlencoded({ extended: true })); //to parse nested objects

app.use(morgan('tiny'));
//--------------------------------/////PASSPORT---------------------------

app.use(cookieParser());

app.use(
  sessions({
    secret: 'fedeTMDB',
    resave: true,
    saveUninitialized: true,
    cookie: { _expires: 60000000000000 },
  })
);

app.use(passport.initialize()); //TO INITIALIZE PASSPORT MIDDLEWARE
app.use(passport.session()); //IT IS RELATED TO THE SERIALIZED AND deserializeUser FUNCTIONS

passport.use(
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    //THIS IS THE FUNCTION THAT IS GOING TO BE USED BY "authenticate" MIDDLEWARE
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then(user => {
          if (!user) {
            // email not found
            return done(null, false); ///THIS MEANS THAT "null" THERE WAS NO ERROR, BUT ALSO DIDNT FIND ANY USER "false"
          }

          user.hash(password, user.salt).then(hash => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then(user => {
      done(null, user);
    })
    .catch(done);
});

//error handler

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send(err);
});

/////routing

app.use('/api', routes);

///// db sync and listening port

const port = 3001;

db.sync({ force: false }).then(() => {
  app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
  });
});
