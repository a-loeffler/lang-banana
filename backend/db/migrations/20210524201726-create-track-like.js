'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TrackLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      likerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Users"},
      },
      trackId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Tracks"},
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
    return queryInterface.dropTable('TrackLikes');
  }
};
