const BaseRepository = require('./BaseRepository');
const models = require('../models');

class VehicleModelRepository extends BaseRepository {
  constructor(vModel, vTypeModel) {
    super(vModel)
    this.model = vModel;
    this.vTypeModel = vTypeModel;
  }

  getAll(limit, offset, where) {
    return this.model.findAndCountAll({ limit, offset, where, include: [
      {
        model: this.vTypeModel
      }
    ]});
  }

  getById(id) {
    return this.model.findByPk(id, {include: [
      {
        model: this.vTypeModel
      }
    ]});
  }
}

module.exports = new VehicleModelRepository(models.VehicleModel, models.VehicleType);
