const db = require('../index');
const Sequelize = require('sequelize');

const Photos = db.define(
  'photo',
  {
    name: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.BLOB
    }
  },
  { timestamps: false }
);

module.exports = Photos;
