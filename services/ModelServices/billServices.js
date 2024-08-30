
const { Bill } = require('../../models');

const BaseService = require('../BaseServices');

class BillService extends BaseService {
    constructor() {
        super(Bill);
    }
}

module.exports = new BillService();
