'use strict';
module.exports = (sequelize, DataTypes) => {
  const languages_known = sequelize.define('languages_known', {
    javascript: DataTypes.BOOLEAN,
    c: DataTypes.BOOLEAN,
    csharp: DataTypes.BOOLEAN,
    java: DataTypes.BOOLEAN,
    ruby: DataTypes.BOOLEAN,
    PHP: DataTypes.BOOLEAN,
    swift: DataTypes.BOOLEAN,
    CPlusPlus: DataTypes.BOOLEAN,
    R: DataTypes.BOOLEAN,
    perl: DataTypes.BOOLEAN,
    assembly: DataTypes.BOOLEAN,
    objectivec: DataTypes.BOOLEAN
  }, {});
  languages_known.associate = function(models) {
    // associations can be defined here
  };
  return languages_known;
};