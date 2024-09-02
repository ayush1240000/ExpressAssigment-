class BaseService {
    constructor(model) {
        this.model = model;
    }

    async add(data, transaction) {
        try {
            return await this.model.create(data, { transaction });
        } catch (error) {
            throw new Error(`Failed to add item: ${error.message}`);
        }
    }

    async getAll(options = {}) {
        try {
            return await this.model.findAndCountAll(options);
        } catch (error) {
            throw new Error(`Failed to retrieve items: ${error.message}`);
        }
    }

    async getById(id) {
        try {
            return await this.model.findOne({ where: { id } });
        } catch (error) {
            throw new Error(`Failed to retrieve item by ID: ${error.message}`);
        }
    }

    async delete(id, transaction) {
        try {
            return await this.model.destroy({ where: { id }, transaction });
        } catch (error) {
            throw new Error(`Failed to delete item: ${error.message}`);
        }
    }

    async update(id, updateData, transaction) {
        try {
            return await this.model.update(updateData, { where: { id }, transaction });
        } catch (error) {
            throw new Error(`Failed to update item: ${error.message}`);
        }
    }

    async search(searchParams, options ={}) {
        try {
            return await this.model.findAndCountAll({
                where: searchParams,
                ...options,
            });
        } catch (error) {
            throw new Error(`Failed to search items: ${error.message}`);
        }
    }
    
    


}

module.exports = BaseService;
