const db = require('../index');
const Sequelize = require('sequelize');

const Photos = db.define(
  'photo',
  {
    path: {
      type: Sequelize.STRING
    },
    destination: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

Photos.slicePath = path => {
  let beginSlice = path.indexOf('/');
  return path.slice(beginSlice);
};

const editPath = photo => {
  photo.path = Photos.slicePath(photo.path);
};

Photos.beforeSave(editPath);

module.exports = Photos;
