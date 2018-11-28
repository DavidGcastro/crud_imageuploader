const router = require('express').Router();

//Map to api files
// starting from /api
router.use('/users', require('./users'));
router.use('/answers', require('./answers'));
router.use('/questions', require('./questions'));

module.exports = router;
