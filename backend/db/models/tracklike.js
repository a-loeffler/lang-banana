'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrackLike = sequelize.define('TrackLike', {
    likerId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {});
  TrackLike.associate = function(models) {
    // associations can be defined here

    TrackLike.belongsTo(models.User, { foreignKey: 'likerId' });
  };
  return TrackLike;
};
