'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Users"},
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Albums"},
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Languages"},
      },
      topicId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Topics"},
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      trackFileUrl: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks');
  }
};
