const SalaryService = require('../services/ModelServices/salaryServices');
const SalaryDTO = require('../dto/SalaryDTO');
const createController = require('./ControllerFactory');

const SalaryController = createController(SalaryService, SalaryDTO);

module.exports = SalaryController;
