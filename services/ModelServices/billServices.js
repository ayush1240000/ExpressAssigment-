
const { Bill } = require('../../models');

const BaseService = require('../baseServices');

class BillService extends BaseService {
    constructor() {
        super(Bill);
    }
}

module.exports = new BillService();
