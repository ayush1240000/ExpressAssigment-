const dinnerTableController = require('../controllers/DinnerTableController');
const createRouter = require('./BaseRouter');

const dinnerTableRouter = createRouter(dinnerTableController);

module.exports = dinnerTableRouter;
