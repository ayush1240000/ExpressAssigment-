const DinnerTableService = require('../services/ModelServices/dinnertableServices');
const DinnerTableDTO = require('../dto/DinnerTableDTO');
const createController = require('./ControllerFactory');

const DinnerTableController = createController(DinnerTableService, DinnerTableDTO);

module.exports = DinnerTableController;
