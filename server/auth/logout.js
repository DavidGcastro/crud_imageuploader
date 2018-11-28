const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('GGGGGG');
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});

module.exports = router;
