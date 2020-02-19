'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    message: DataTypes.TEXT,
  }, {});
  Messages.associate = function(models) {
    Messages.belongsTo(models.Members, { foreignKey: "sender_id" });
    Messages.belongsTo(models.Members, { foreignKey: "receiver_id" });
  };
  return Messages;
};