const vehicleModelRepository = require('../repositories/VehicleModelRepository');
const BaseService = require('./BaseService')

class VehicleModelService extends BaseService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = new VehicleModelService(vehicleModelRepository);
