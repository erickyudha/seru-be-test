const BaseRepository = require('./BaseRepository');
const models = require('../models');

class VehicleTypeRepository extends BaseRepository {
  constructor(vTypeModel, vBrandModel) {
    super(vTypeModel)
    this.model = vTypeModel;
    this.vBrandModel = vBrandModel;
  }

  getAll(limit, offset, where) {
    return this.model.findAndCountAll({
      limit, offset, where, include: [
        {
          model: this.vBrandModel
        }
      ]
    });
  }

  getById(id) {
    return this.model.findByPk(id, {
      include: [
        {
          model: this.vBrandModel
        }
      ]
    });
  }
}

module.exports = new VehicleTypeRepository(models.VehicleType, models.VehicleBrand);
