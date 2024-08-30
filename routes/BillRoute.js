const billController = require('../controllers/BillController');
const createRouter = require('./BaseRouter');

const billRouter = createRouter(billController);

module.exports = billRouter;
