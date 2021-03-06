const router = require('express').Router();
const { question } = require('../db/models/index');

router.get('/', (req, res, next) => {
  question
    .findAll()
    .then(qs => res.send(qs))
    .catch(err => next(err));
});

module.exports = router;
