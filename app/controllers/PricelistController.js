const BaseController = require('./BaseController');
const PricelistService = require('../services/PricelistService');

class PricelistController extends BaseController {
    constructor(service) {
        this.baseService = service;
    }
}

module.exports = new PricelistController(PricelistService);