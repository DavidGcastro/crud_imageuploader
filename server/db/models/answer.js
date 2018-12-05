const db = require('../index');
const Sequelize = require('sequelize');

const Answer = db.define(
  'answer',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    response: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [2]
      }
    }
  },
  {
    timestamps: false
  }
);

module.exports = Answer;
