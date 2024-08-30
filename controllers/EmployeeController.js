const EmployeeService = require('../services/ModelServices/employeeServices');
const EmployeeDTO = require('../dto/EmployeeDTO');
const createController = require('./ControllerFactory');

const EmployeeController = createController(EmployeeService, EmployeeDTO);

module.exports = EmployeeController;
