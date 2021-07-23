const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUsersById)
router.post('/', userController.createUser)
router.delete('/delete/:id',userController.deleteUser)
router.put('/update/:id',userController.updateUser)

module.exports = router