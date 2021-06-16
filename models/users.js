'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.watchlist, {
        foreignKey: 'user_id'
      }),
      this.hasOne(models.review, {
        foreignKey: 'user_id'
      }),
      this.hasMany(models.review, {
        foreignKey: 'user_id'
      })
    }
  };
  users.init({
    role: DataTypes.STRING,
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};