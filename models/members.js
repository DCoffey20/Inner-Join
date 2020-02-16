'use strict';
module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    gender_orientation: DataTypes.INTEGER,
    about_me: DataTypes.TEXT,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Members.associate = function(models) {
    Members.hasMany(models.Messages, { foreignKey: "sender_id" });
    Members.hasMany(models.Messages, { foreignKey: "receiver_id" });
    Members.hasMany(models.Languages, { foreignKey: "member_id" });
    Members.hasMany(models.profilePics);
  };
  return Members;
};