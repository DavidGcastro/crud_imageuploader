const router = require('express').Router();
const { user } = require('../db/models');

router.post('/', (req, res, next) => {
  let { firstName, lastName, email, password } = req.body;
  user
    .create({ firstName, lastName, email, password })
    .then(user => {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res
          .status(200)
          .json({ success: true, redirectUrl: '/profile', user: req.user });
      });
    })
    .catch(err => console.error(err));
});

module.exports = router;
