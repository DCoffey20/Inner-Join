'use strict';
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    gender: DataTypes.INTEGER,
    gender_orientation: DataTypes.INTEGER,
    about_me: DataTypes.TEXT,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Members.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Members.addHook("beforeCreate", function(members) {
    members.password = bcrypt.hashSync(members.password, bcrypt.genSaltSync(10), null);
  });

  Members.associate = function(models) {
    Members.hasMany(models.Messages, { foreignKey: "sent_by_id" });
    Members.hasMany(models.Messages, { foreignKey: "received_by_id" });
    Members.hasMany(models.Languages, { foreignKey: "member_id" });
    Members.hasMany(models.profilePics, { foreignKey: "member_id" });
  };
  return Members;
};