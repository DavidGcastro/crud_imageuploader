const router = require('express').Router();

router.get('/me', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    // res.send(false);
    res.status(500).send('Something broke!');
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});
//Map to api files
// starting from /auth
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

module.exports = router;
