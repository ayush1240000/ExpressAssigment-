
const { Salary } = require('../../models');

const BaseService = require('../baseServices');

class SalaryService extends BaseService {
    constructor() {
        super(Salary);
    }
}

module.exports = new SalaryService();
