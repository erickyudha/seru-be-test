const BaseRepository = require('./BaseRepository');
const models = require('../models');

class VehicleModelRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleModelRepository(models.VehicleModel);
