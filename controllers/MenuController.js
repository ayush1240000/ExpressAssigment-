const MenuService = require('../services/ModelServices/menuServices');
const MenuDTO = require('../dto/MenuDTO');
const createController = require('./ControllerFactory');

const MenuController = createController(MenuService, MenuDTO);

module.exports = MenuController;
