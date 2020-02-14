'use strict';
module.exports = (sequelize, DataTypes) => {
  const profilePics = sequelize.define('profilePics', {
    url: DataTypes.TEXT
  }, {});
  profilePics.associate = function(models) {
    // associations can be defined here
  };
  return profilePics;
};