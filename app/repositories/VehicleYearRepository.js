const { VehicleYear } = require('../models');
const {BaseRepository} = require('./BaseRepository');

class VehicleYearRepository extends BaseRepository {
  constructor(model) {
    super(model)
  }
}

module.exports = new VehicleYearRepository(VehicleYear);
