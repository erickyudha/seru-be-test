const BaseController = require('./BaseController');
const PricelistService = require('../services/PricelistService');

class PricelistController extends BaseController {
    constructor(service) {
        super('pricelist', service)
    }
}


module.exports = new PricelistController(PricelistService);