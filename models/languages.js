'use strict';
module.exports = (sequelize, DataTypes) => {
  const Languages = sequelize.define('Languages', {
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
  Languages.associate = function(models) {
    Languages.belongsToMany(models.Members, { through: 'MemberLanguages' });
  };
  return Languages;
};