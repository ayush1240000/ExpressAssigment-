
const { UserOrder } = require('../../models');

const BaseService = require('../baseServices');

class UserOrderService extends BaseService {
    constructor() {
        super(UserOrder);
    }
}

module.exports = new UserOrderService();
