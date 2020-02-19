'use strict';
module.exports = (sequelize, DataTypes) => {
  const Languages = sequelize.define('Languages', {
    javascript: DataTypes.BOOLEAN,
    c: DataTypes.BOOLEAN,
    csharp: DataTypes.BOOLEAN,
    java: DataTypes.BOOLEAN,
    ruby: DataTypes.BOOLEAN,
    php: DataTypes.BOOLEAN,
    swift: DataTypes.BOOLEAN,
    cPlusPlus: DataTypes.BOOLEAN,
    r: DataTypes.BOOLEAN,
    perl: DataTypes.BOOLEAN,
    assembly: DataTypes.BOOLEAN,
    html: DataTypes.BOOLEAN,
    css: DataTypes.BOOLEAN,
    python: DataTypes.BOOLEAN,
    objectiveC: DataTypes.BOOLEAN
  }, {});
  Languages.associate = function(models) {
    //none
  };
  return Languages;
};