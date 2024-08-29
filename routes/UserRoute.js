
const UserControllers = require('../controllers/UserControllers.js');
const router = require('express').Router();
router.post('/addUser', UserControllers.addUser);
router.get('/',UserControllers.getallUser);
router.get('/:Userid',UserControllers.getOneUser);
router.delete('/:Userid',UserControllers.deleteUser);
router.put('/:Userid',UserControllers.UpdateUser);



module.exports = router;