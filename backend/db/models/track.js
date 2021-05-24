'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 255],
      },
    },
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'PlaylistTrack',
      otherKey: 'playlistId',
      foreignKey: 'trackId'
    };

    Track.belongsToMany(models.Playlist, columnMapping);

    Track.belongsTo(models.Language, {foreignKey: 'languageId'});
    Track.belongsTo(models.Topic, {foreignKey: 'topicId'});
    Track.belongsTo(models.Album, {foreignKey: 'albumId'});
    Track.belongsTo(models.User, {foreignKey: 'creatorId'});
  };
  return Track;
};
