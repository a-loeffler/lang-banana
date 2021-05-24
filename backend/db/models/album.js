'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    creatorId: {
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
    coverArtUrl: {
      type: DataTypes.STRING,
    }
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.Language, { foreignKey: 'languageId' });
    Album.belongsTo(models.Topic, { foreignKey: 'topicId' });
    Album.belongsTo(models.User, { foreignKey: 'creatorId' });


  };
  return Album;
};
