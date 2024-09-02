
const { Customer } = require('../../models');
const BaseService = require('../baseServices');

class CustomerService extends BaseService {
    constructor() {
        super(Customer);
    }
}

module.exports = new CustomerService();
