const SalaryService = require('../services/ModelServices/salaryServices');
const SalaryDTO = require('../dto/SalaryDTO');
const createController = require('./baseController');

const SalaryController = createController(SalaryService, SalaryDTO);

module.exports = SalaryController;
