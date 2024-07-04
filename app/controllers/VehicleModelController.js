const BaseController = require('./BaseController');
const VehicleModelService = require('../services/VehicleModelService');

class VehicleModelController extends BaseController {
    constructor(service) {
        super('vehicle model', service)
    }
}

module.exports = new VehicleModelController(VehicleModelService);