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
      // Create a unique index on question
      {
        unique: true,
        fields: ['questionId']
      },
      {
        allowNull: false,
        fields: ['userId', 'questionId']
      }
    ]
  }
);

module.exports = Answer;
