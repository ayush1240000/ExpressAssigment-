
const { User } = require('../../models');

const BaseService = require('../BaseServices');

class UserService extends BaseService {
    constructor() {
        super(User);
    }
}

module.exports = new UserService();
