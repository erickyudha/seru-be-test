'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VehicleBrand extends Model {
    static associate(models) {
      VehicleBrand.hasMany(models.VehicleType, { foreignKey: 'brand_id' });
    }
  }

  VehicleBrand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VehicleBrand',
    timestamps: true
  });

  return VehicleBrand;
};
