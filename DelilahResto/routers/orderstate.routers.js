const express = require('express')
const router = express.Router()
const orderStateController = require('../controllers/orderstate.controller')

router.get('/', orderStateController.getOrderState)
router.get('/:id', orderStateController.getOrderStateById)
router.post('/new', orderStateController.createOrderState)
router.delete('/delete/:id',orderStateController.deleteOrderState)
router.put('/update/:id',orderStateController.updateOrderState)

module.exports = router