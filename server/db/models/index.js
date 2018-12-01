'use strict';
const db = require('../index');
const user = require('./user');
const question = require('./question');
const answer = require('./answer');
const photo = require('./photo');

photo.belongsTo(user);
user.hasMany(photo);
user.hasMany(answer, { foreignKey: { allowNull: false } }); //target table
answer.belongsTo(user);
answer.belongsTo(question, { foreignKey: { allowNull: false } });
question.hasMany(answer, { foreignKey: { allowNull: false } });

module.exports = { db, user, photo, question, answer };
