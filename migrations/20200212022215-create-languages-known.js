'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('languages_knowns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      javascript: {
        type: Sequelize.BOOLEAN
      },
      c: {
        type: Sequelize.BOOLEAN
      },
      csharp: {
        type: Sequelize.BOOLEAN
      },
      java: {
        type: Sequelize.BOOLEAN
      },
      ruby: {
        type: Sequelize.BOOLEAN
      },
      PHP: {
        type: Sequelize.BOOLEAN
      },
      swift: {
        type: Sequelize.BOOLEAN
      },
      C++: {
        type: Sequelize.BOOLEAN
      },
      R: {
        type: Sequelize.BOOLEAN
      },
      perl: {
        type: Sequelize.BOOLEAN
      },
      assembly: {
        type: Sequelize.BOOLEAN
      },
      objective - c: {
        type: Sequelize.BOOLEAN
      },
      r: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('languages_knowns');
  }
};