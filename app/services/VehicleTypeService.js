const vehicleTypeRepository = require('../repositories/VehicleTypeRepository');
const BaseService = require('./BaseService')

class VehicleTypeService extends BaseService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = new VehicleTypeService(vehicleTypeRepository);
