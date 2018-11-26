const { User } = require('./db/models');
const passport = require('passport');
const decrypt = require('./utils/hashing').isCorrectPassword;
const LocalStrategy = require('passport-local').Strategy;

// configure passport.js to use the local strategy
passport.use(
  //THIS WILL BE CALLED FROM passport.authenticate!
  // we will take in the data from our POST request,
  //use that to find the matching user in the database and check that the credentials match.
  // If they do match, passport will add a login() method to our request object,
  // and then we return to our passport.authenticate() callback function.
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    console.log('Inside local strategy callback');
    // here is where you make a call to the database
    // to find the user based on their username or email address
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user) {
          console.log('NOT FOUND');
          return done(null, false);
        } else if (decrypt(password, user.salt(), user.password())) {
          console.log('Local strategy returned true');
          return done(null, user);
        }
      })
      .catch(err => done(err));
  })
);
