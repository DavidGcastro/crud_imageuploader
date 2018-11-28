const router = require('express').Router();

router.get('/me', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(500).send('Something broke!');
  }
});

//Map to api files
// starting from /auth
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));
router.use('/logout', require('./logout'));

module.exports = router;
