const billController = require('../controllers/billController');
const createRouter = require('./BaseRouter');

const billRouter = createRouter(billController);

module.exports = billRouter;
