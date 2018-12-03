const { user } = require('./db/models');
const passport = require('passport');
const decrypt = require('./utils/hashing').isCorrectPassword;
const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    console.log('Inside local strategy callback');
    user
      .findOne({
        where: {
          email
        }
      })
      .then(user => {
        if (!user) {
          console.log('NOT FOUND');
          return done(null, false);
        } else if (decrypt(password, user.salt(), user.password())) {
          console.log('Local strategy returned true', user);
          return done(null, user);
        }
      })
      .catch(err => done(err));
  })
);
