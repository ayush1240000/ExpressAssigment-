
const { OrderMenu } = require('../../models');

const BaseService = require('../BaseServices');

class OrderMenuService extends BaseService {
    constructor() {
        super(OrderMenu);
    }
}

module.exports = new OrderMenuService();
