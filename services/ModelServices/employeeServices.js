const { Employee } = require('../../models');
const BaseService = require('../BaseServices');

class EmployeeService extends BaseService {
    constructor() {
        super(Employee);
    }
}

module.exports = new EmployeeService();
