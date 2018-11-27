const db = require('../index');
const Sequelize = require('sequelize');

const Answer = db.define(
  'answer',
  {
    response: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  { timestamps: false }
);

module.exports = Answer;
