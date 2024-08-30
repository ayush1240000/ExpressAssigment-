

const customerService = require('../services/ModelServices/customerServices');
const CustomerDTO = require('../dto/CustomerDTO');
const createController = require('./ControllerFactory');

const CustomerController = createController(customerService, CustomerDTO);

module.exports = CustomerController;
