
const { Customer } = require('../../models');
const BaseService = require('../BaseServices');

class CustomerService extends BaseService {
    constructor() {
        super(Customer);
    }
}

module.exports = new CustomerService();
