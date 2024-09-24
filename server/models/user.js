'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: 'roleId' });
      User.hasMany(models.Transaction, { foreignKey: 'userId' });
      User.hasMany(models.Reedem, { foreignKey: 'customerId' });
      User.hasMany(models.Product, { foreignKey: 'merchantId' });
    };
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    rewardsPoint: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};