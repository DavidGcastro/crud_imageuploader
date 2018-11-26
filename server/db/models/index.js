'use strict';
const db = require('../index');
// Require all the models
const user = require('../models/user');
const questions = require('../models/questions');
const photos = require('../models/photos');

user.hasMany(photos);
user.hasMany(questions);
// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations

module.exports = { db };
