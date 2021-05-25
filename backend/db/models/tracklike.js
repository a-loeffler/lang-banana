'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrackLike = sequelize.define('TrackLike', {
    likerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  TrackLike.associate = function(models) {
    // associations can be defined here

    TrackLike.belongsTo(models.User, { foreignKey: 'likerId' });
    TrackLike.belongsTo(models.Track, { foreignKey: 'trackId' })
  };
  return TrackLike;
};
