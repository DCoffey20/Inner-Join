'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message: DataTypes.TEXT,
  }, {});
  Messages.associate = function(models) {
    
  };
  return Messages;
};