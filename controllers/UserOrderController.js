const UserOrderService = require('../services/ModelServices/userOrderService');
const UserOrderDTO = require('../dto/UserOrderDTO');
const createController = require('./baseController');

const UserOrderController = createController(UserOrderService, UserOrderDTO);

module.exports = UserOrderController;
