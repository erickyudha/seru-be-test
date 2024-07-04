const BaseController = require('./BaseController');
const VehicleTypeService = require('../services/VehicleTypeService');

class VehicleTypeController extends BaseController {
    constructor(service) {
        super('vehicle type', service)
    }
}

module.exports = new VehicleTypeController(VehicleTypeService);