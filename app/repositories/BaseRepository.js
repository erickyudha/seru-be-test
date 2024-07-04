class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  getAll(limit, offset, where) {
    return this.model.findAndCountAll({ limit, offset, where });
  }

  getById(id) {
    return this.model.findByPk(id);
  }

  create(data) {
    return this.model.create(data);
  }

  update(id, data) {
    return this.model.update(data, { where: { id } });
  }

  delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = BaseRepository;