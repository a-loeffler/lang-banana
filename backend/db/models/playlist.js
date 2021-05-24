'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 100],
      },
    },
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here

    const columnMapping = {
      through: 'PlaylistTrack',
      otherKey: 'trackId',
      foreignKey: 'playlistId'
    };

    Playlist.belongsToMany(models.Track, columnMapping);

  };
  return Playlist;
};
