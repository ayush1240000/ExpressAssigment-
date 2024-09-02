// const UserController = require('../controllers/UserControllers');
// const createRouter = require('./BaseRouter');

// const userRouter = createRouter(UserController);
// module.exports = userRouter;
const express = require('express');
const { body, validationResult } = require('express-validator');
const UserController = require('../controllers/UserControllers');


const createRouter = (controller) => {
    const router = express.Router();
    router.post('/add',
        body('fname')
            .notEmpty().withMessage('fname cannot be null')
            .bail()
            .isLength({ min: 4, max: 32 }).withMessage('fname must have min 4 and max 32 characters'),
        async (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
        controller.add
    );

    router.get('/', controller.getAll);
    router.get('/:userid', controller.getOne);
    router.delete('/:id', controller.delete);
    router.put('/:id', controller.update);

    return router;
};

const userRouter = createRouter(UserController);
module.exports = userRouter;
