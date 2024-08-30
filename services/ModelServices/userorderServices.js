
const { UserOrder } = require('../../models');

const BaseService = require('../BaseServices');

class UserOrderService extends BaseService {
    constructor() {
        super(UserOrder);
    }
}

module.exports = new UserOrderService();
