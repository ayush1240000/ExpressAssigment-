const OrderMenuService = require('../services/ModelServices/ordermenuServices');
const OrderMenuDTO = require('../dto/OrderMenuDTO');
const createController = require('./baseController');

const OrderMenuController = createController(OrderMenuService, OrderMenuDTO);

module.exports = OrderMenuController;
