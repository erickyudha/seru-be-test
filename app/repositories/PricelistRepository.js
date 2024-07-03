const {BaseRepository} = require('./BaseRepository');
const { Pricelist, VehicleModel, VehicleType, VehicleBrand, VehicleYear } = require('../models');

class PricelistRepository extends BaseRepository {
  constructor(pricelistModel) {
    super(pricelistModel)
  }

  async getAll(limit, offset, where) {
    const { count, rows } = await this.model.findAndCountAll({
      limit,
      offset,
      where,
      include: [
        {
          model: VehicleModel,
          include: [
            {
              model: VehicleType,
              include: [
                {
                  model: VehicleBrand
                }
              ]
            }
          ]
        },
        {
          model: VehicleYear
        }
      ]
    });
    return { total: count, data: rows };
  }

  async getById(id) {
    return await this.model.findByPk(id, {
      include: [
        {
          model: VehicleModel,
          include: [
            {
              model: VehicleType,
              include: [
                {
                  model: VehicleBrand
                }
              ]
            }
          ]
        },
        {
          model: VehicleYear
        }
      ]
    });
  }
}

module.exports = new PricelistRepository(Pricelist);
