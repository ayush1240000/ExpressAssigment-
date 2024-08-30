
const { DinnerTable } = require('../../models');

const BaseService = require('../BaseServices');

class DinnerTableService extends BaseService {
    constructor() {
        super(DinnerTable);
    }
}

module.exports = new DinnerTableService();
