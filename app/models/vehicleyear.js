'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class VehicleYear extends Model {
    static associate(models) {
      VehicleYear.hasMany(models.Pricelist, { foreignKey: 'year_id' });
    }
  }

  VehicleYear.init({
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VehicleYear',
    timestamps: true
  });

  return VehicleYear;
};
