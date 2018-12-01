'use strict';
const db = require('../index');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const photo = require('./photo');

photo.belongsTo(user);
user.hasMany(photo);
user.hasMany(answer); //target table
answer.belongsTo(user);
answer.belongsTo(question);
question.hasMany(answer);

// { foreignKey: { allowNull: false }, onDelete: 'CASCADE' }
module.exports = { db, user, photo, question, answer };
