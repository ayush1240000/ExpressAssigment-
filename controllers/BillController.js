const BillService = require('../services/ModelServices/billServices');
const BillDTO = require('../dto/BillDTO');
const createController = require('./ControllerFactory');

const BillController = createController(BillService, BillDTO);

module.exports = BillController;
