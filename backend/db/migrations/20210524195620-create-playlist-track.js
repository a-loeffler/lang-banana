'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlaylistTracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trackId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Tracks"},
      },
      playlistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Playlists"},
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
    return queryInterface.dropTable('PlaylistTracks');
  }
};
