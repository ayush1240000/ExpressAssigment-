
const customerController = require('../controllers/CustomerController');
const createRouter = require('./BaseRouter');

const customerRouter = createRouter(customerController);

module.exports = customerRouter;
