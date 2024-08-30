const orderMenuController = require('../controllers/OrderMenuController');
const createRouter = require('./BaseRouter');

const orderMenuRouter = createRouter(orderMenuController);

module.exports = orderMenuRouter;
