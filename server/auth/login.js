const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../passportConfig');

router.post('/', passport.authenticate('local'), function(req, res) {
  return res
    .status(200)
    .json({ success: true, redirectUrl: '/profile', user: req.user });
});

module.exports = router;
