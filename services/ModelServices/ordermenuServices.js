
const { OrderMenu } = require('../../models');

const BaseService = require('../baseServices');

class OrderMenuService extends BaseService {
    constructor() {
        super(OrderMenu);
    }
}

module.exports = new OrderMenuService();
