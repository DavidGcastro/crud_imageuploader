const db = require('../index');
const Sequelize = require('sequelize');

const photos = db.define('photos', {
  photo: {
    type: Sequelize.BLOB
  }
});

module.exports = photos;
