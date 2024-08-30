const menuController = require('../controllers/MenuController');
const createRouter = require('./BaseRouter');

const menuRouter = createRouter(menuController);

module.exports = menuRouter;
