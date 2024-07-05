const BaseRepository = require('./BaseRepository');
const models = require('../models');

class PricelistRepository extends BaseRepository {
  constructor(pricelistModel, models) {
    super(pricelistModel)
    this.model = pricelistModel;
    this.models = models;
  }

  getAll(limit, offset, where) {
    return this.model.findAndCountAll({
      limit, offset, where, include: [
        {
          model: this.models.VehicleYear
        },
        {
          model: this.models.VehicleModel
        }
      ]
    });
  }

  getById(id) {
    return this.model.findByPk(id, {
      include: [
        {
          model: this.models.VehicleYear
        },
        {
          model: this.models.VehicleModel
        }
      ]
    });
  }
}

module.exports = new PricelistRepository(models.Pricelist, models);
