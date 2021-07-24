const express = require('express')
const router = express.Router()
const userStateController = require('../controllers/userstate.controller')

router.get('/', userStateController.getUserState)
router.get('/:id', userStateController.getUserStateById)
router.post('/new', userStateController.createUserState)
router.delete('/delete/:id',userStateController.deleteUserState)
router.put('/update/:id',userStateController.updateUserState)

module.exports = router