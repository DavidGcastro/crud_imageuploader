const db = require('../index');
const Sequelize = require('sequelize');

const Answer = db.define(
  'answer',
  {
    response: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [2]
      }
    }
  },
  {
    timestamps: false,
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['questionId']
      }
    ]
  }
);

module.exports = Answer;
