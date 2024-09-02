const { Employee } = require('../../models');
const BaseService = require('../baseServices');

class EmployeeService extends BaseService {
    constructor() {
        super(Employee);
    }
    async delete(empid) {
        return this.model.destroy({ where: {employeeid} });
    }
}

module.exports = new EmployeeService();
