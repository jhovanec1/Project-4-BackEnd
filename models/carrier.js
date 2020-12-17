'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrier.hasMany(models.Order,{foreignKey: 'carrierId'})
      Carrier.belongsToMany(models.User, {
        through: 'Order',
        foreignKey: 'carrierId',
        otherKey: 'userId'
      })
      Carrier.belongsToMany(models.Restaurant, {
        through: 'Order',
        foreignKey: 'carrierId',
        otherKey: 'restaurantId'
      })
    }
  };
  Carrier.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    account: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carrier',
  });
  return Carrier;
};