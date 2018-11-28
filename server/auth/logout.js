const router = require('express').Router();

router.get('/', (req, res) => {
  req.logout();
  req.session.destroy();
  res.sendStatus(200);
});

module.exports = router;
