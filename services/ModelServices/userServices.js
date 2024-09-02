
const { User } = require('../../models');

const BaseService = require('../baseServices');

class UserService extends BaseService {
    constructor() {
        super(User);
    }
    
    async getById(userid) {
        return this.model.findOne({ where: {userid} });
    }
}

module.exports = new UserService();
