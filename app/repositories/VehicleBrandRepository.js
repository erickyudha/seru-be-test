const { VehicleBrand } = require('../models');
const {BaseRepository} = require('./BaseRepository');

class VehicleBrandRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleBrandRepository(VehicleBrand);
