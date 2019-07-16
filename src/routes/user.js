const router = require('express').Router()
const userController= require('../controllers/user')

router.get('/', userController.getAllUsers)
router.post('/',  userController.createUser)
router.delete('/', userController.deleteUser)
router.put('/', userController.updateUser)

module.exports = router