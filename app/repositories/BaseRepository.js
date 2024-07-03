class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async getAll(limit, offset, where) {
        const { count, rows } = await this.model.findAndCountAll({ limit, offset, where });
        return { total: count, data: rows };
      }
    
      async getById(id) {
        return await this.model.findByPk(id);
      }
    
      async create(data) {
        return await this.model.create(data);
      }
    
      async update(id, data) {
        return await this.model.update(data, { where: { id } });
      }
    
      async delete(id) {
        return await this.model.destroy({ where: { id } });
      }
}

module.exports = BaseRepository;