const MenuService = require('../services/ModelServices/menuServices');
const MenuDTO = require('../dto/MenuDTO');
const createController = require('./baseController');

const MenuController = createController(MenuService, MenuDTO);

module.exports = MenuController;
