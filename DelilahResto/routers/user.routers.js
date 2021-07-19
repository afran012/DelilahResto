const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: 'mysql://root:@localhost:5432/RestauratDB'})
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers)

module.exports = router