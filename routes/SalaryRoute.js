const SalaryController = require('../controllers/SalaryController');
const createRouter = require('./BaseRouter');

const SalaryRouter = createRouter(SalaryController);

module.exports = SalaryRouter;
