'use strict';
module.exports = (sequelize, DataTypes) => {
  const profilePics = sequelize.define('profilePics', {
    title: DataTypes.TEXT,
    image: DataTypes.JSON
  }, {});
  profilePics.associate = function(models) {
    // associations can be defined here
  };
  return profilePics;
};