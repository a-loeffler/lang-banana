'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaylistTrack = sequelize.define('PlaylistTrack', {
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  PlaylistTrack.associate = function(models) {
    // associations can be defined here
  };
  return PlaylistTrack;
};
