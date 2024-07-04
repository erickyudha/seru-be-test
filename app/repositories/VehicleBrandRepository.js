const BaseRepository = require('./BaseRepository');
const models = require('../models');

class VehicleBrandRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleBrandRepository(models.VehicleBrand);
