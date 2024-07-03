const BaseController = require('./BaseController');
const VehicleYearService = require('../services/VehicleYearService');

class VehicleYearController extends BaseController {
    constructor(service) {
        this.baseService = service;
    }
}

module.exports = new VehicleYearController(VehicleYearService);