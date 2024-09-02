const { Employee } = require('../../models');
const BaseService = require('../baseServices');

class EmployeeService extends BaseService {
    constructor() {
        super(Employee);
    }
}

module.exports = new EmployeeService();
