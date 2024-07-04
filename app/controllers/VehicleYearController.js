const BaseController = require('./BaseController');
const VehicleYearService = require('../services/VehicleYearService');

class VehicleYearController extends BaseController {
    constructor(service) {
        super('vehicle year', service)
    }
}

module.exports = new VehicleYearController(VehicleYearService);