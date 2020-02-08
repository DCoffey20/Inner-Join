'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {});
  Messages.associate = function(models) {
    // associations can be defined here
  };
  return Messages;
};