
const { DinnerTable } = require('../../models');

const BaseService = require('../baseServices');

class DinnerTableService extends BaseService {
    constructor() {
        super(DinnerTable);
    }
}

module.exports = new DinnerTableService();
