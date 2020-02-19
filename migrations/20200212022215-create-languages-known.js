'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
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
      php: {
        type: Sequelize.BOOLEAN
      },
      swift: {
        type: Sequelize.BOOLEAN
      },
      cPlusPlus: {
        type: Sequelize.BOOLEAN
      },
      r: {
        type: Sequelize.BOOLEAN
      },
      perl: {
        type: Sequelize.BOOLEAN
      },
      assembly: {
        type: Sequelize.BOOLEAN
      },
      html: {
        type: Sequelize.BOOLEAN
      },
      css: {
        type: Sequelize.BOOLEAN
      },
      python: {
        type: Sequelize.BOOLEAN
      },
      objectiveC: {
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
    return queryInterface.dropTable('Languages');
  }
};