const db = require('../index');
const Sequelize = require('sequelize');

const Photos = db.define(
  'photos',
  {
    photo: {
      type: Sequelize.BLOB
    }
  },
  { timestamps: false }
);

module.exports = Photos;
