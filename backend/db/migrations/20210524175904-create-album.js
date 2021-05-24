'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Languages" },
      },
      topicId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Topics" },
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      coverArtUrl: {
        type: Sequelize.STRING(255),
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
    return queryInterface.dropTable('Albums');
  }
};
