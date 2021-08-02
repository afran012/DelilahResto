const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const validadteUserCredentials = require('../middlewares/authentication')

router.get('/', validadteUserCredentials.validateToken , userController.getUsers)
router.get('/:id', validadteUserCredentials.validateToken , userController.getUsersById)
router.post('/signup', userController.createUser)
router.post('/login', validadteUserCredentials.validadteUserCredentials , userController.loginUser )
router.delete('/:id', validadteUserCredentials.validateAdmin ,userController.deleteUser)
router.put('/:id', validadteUserCredentials.validateAdmin ,userController.updateUser)

module.exports = router