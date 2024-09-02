const DinnerTableService = require('../services/ModelServices/dinnertableServices');
const DinnerTableDTO = require('../dto/DinnerTableDTO');
const createController = require('./baseController');

const DinnerTableController = createController(DinnerTableService, DinnerTableDTO);

module.exports = DinnerTableController;
