const express = require('express');
// const usercontroller =require('../controllers/UserControllers')
const createRouter = (controller) => {
    const router = express.Router();

    router.post('/add', controller.add);
    router.get('/', controller.getAll);
    router.get('/:id', controller.getOne);
    router.delete('/:id', controller.delete);
    router.put('/:id', controller.update);
    // router.get('/id',controller.searc);

    return router;
};
    
module.exports = createRouter;
