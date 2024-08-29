
const UserControllers = require('../controllers/UserControllers');
const router = require('express').Router();
router.post('/addUser', UserControllers.addUser);
router.get('/',UserControllers.getallUsers);
router.get('/:Userid',UserControllers.getOneUser);
router.delete('/:Userid',UserControllers.deleteUser);
router.put('/:Userid',UserControllers.UpdateUser);



module.exports = router;