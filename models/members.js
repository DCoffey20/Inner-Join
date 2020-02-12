'use strict';
module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    email: DataTypes.STRING,
    languages: DataTypes.STRING,
    gender_orientation: DataTypes.INTEGER,
    about_me: DataTypes.TEXT

  }, {});
  Members.associate = function(models) {
    Members.hasMany(models.Messages, { foreignKey: "sender_id" });
    Members.hasMany(models.Messages, { foreignKey: "receiver_id" });
  };
  return Members;
};