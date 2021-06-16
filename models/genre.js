'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.movies, {
        foreignKey: 'movie_id'
      })
    }
  };
  genre.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    movie_id: {
      type: DataTypes.INTEGER,
      foreignKey:true
    },
    sub_genre_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'genre',
  });
  return genre;
};