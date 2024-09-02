class BaseService {
    constructor(model) {
        this.model = model;
    }

    async add(data, transaction) {
        return this.model.create(data, { transaction });
    }

    async getAll() {
        return this.model.findAndCountAll();
    }

    async getById(id) {
        return this.model.findOne({ where: {id} });
    }

    async delete(id, transaction) {
        return this.model.destroy({ where: { id }, transaction });
    }

    async update(id, updateData, transaction) {
        return this.model.update(updateData, { where: { id }, transaction });
    }
    
    async filter(){
        return this.model.find({where : id});
    }
}

module.exports = BaseService;
