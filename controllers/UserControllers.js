

const userService = require('../services/ModelServices/userServices');
const UserDTO = require('../dto/UserDTO');
const createController = require('../controllers/ControllerFactory');

const userController = createController(userService, UserDTO);

module.exports = userController;
