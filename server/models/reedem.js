'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reedem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reedem.belongsTo(models.User, { foreignKey: 'customerId' });
      Reedem.belongsTo(models.Reward, { foreignKey: 'rewardId' });

    }
  }
  Reedem.init({
    customerId: DataTypes.INTEGER,
    rewardId: DataTypes.INTEGER,
    redeemDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reedem',
  });
  return Reedem;
};