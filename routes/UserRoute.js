
const UserController = require('../controllers/UserControllers');
const createRouter = require('./BaseRouter');

const userRouter = createRouter(UserController);

module.exports = userRouter;
