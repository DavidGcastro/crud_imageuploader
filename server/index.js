const db = require('./db/models').db;
const PORT = 3000;
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const SessionStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const seed = require('./db/seed');
const uuidv4 = require('uuid/v4');

//logging middleware
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: uuidv4(),
    resave: false,
    store: new SessionStore({
      db
    }),
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
app.use(function(req, res, next) {
  console.log('******SESSION HERE***** ', req.session);
  if (req.session.passport) {
    console.log('USER WAS HERE BEFORE');
  } else {
    console.log('NEW USER');
  }
  next();
});

app.use('/api', require('./api')); // include our routes!
app.use('/auth', require('./auth'));
app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;

db.sync({ force: true }) // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => seed())
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  });
