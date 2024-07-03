const {BaseService} = require('./BaseService')
const {PricelistRepository} = require('../repositories/PricelistRepository')

class PricelistService extends BaseService {
  constructor(repository) {
    super(repository)
  }
}

module.exports = new PricelistService(PricelistRepository);
