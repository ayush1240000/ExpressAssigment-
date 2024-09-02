const express = require('express');
// const usercontroller =require('../controllers/UserControllers')
const createRouter = (controller) => {
    const router = express.Router();

    router.post('/add', controller.add);
    router.get('/:id', controller.getAll);
    router.get('/:id', controller.getOne);
    router.delete('/:id', controller.delete);
    router.put('/:id', controller.update);
    router.get('filter/id',controller.filter);

    return router;
};
    
module.exports = createRouter;
