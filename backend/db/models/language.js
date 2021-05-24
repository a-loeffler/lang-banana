'use strict';
module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 30]
      }
    }
  }, {});
  Language.associate = function(models) {
    // associations can be defined here
    Language.hasMany(models.Album, { foreignKey: 'languageId' });
    Language.hasMany(models.Track, { foreignKey: 'languageId' });
  };
  return Language;
};
