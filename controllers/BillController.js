const BillService = require('../services/ModelServices/billServices');
const BillDTO = require('../dto/BillDTO');
const createController = require('./baseController');

const BillController = createController(BillService, BillDTO);

module.exports = BillController;
