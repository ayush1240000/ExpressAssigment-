const userOrderController = require('../controllers/UserOrderController');
const createRouter = require('./BaseRouter');

const userOrderRouter = createRouter(userOrderController);

module.exports = userOrderRouter;
