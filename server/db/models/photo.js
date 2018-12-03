const db = require('../index');
const Sequelize = require('sequelize');

const Photos = db.define(
  'photo',
  {
    path: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

module.exports = Photos;
