
const employeeController = require('../controllers/EmployeeController');
const createRouter = require('./BaseRouter');

const EmployeeRouter = createRouter(employeeController);

module.exports = EmployeeRouter;
