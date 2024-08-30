
const { Salary } = require('../../models');

const BaseService = require('../BaseServices');

class SalaryService extends BaseService {
    constructor() {
        super(Salary);
    }
}

module.exports = new SalaryService();
