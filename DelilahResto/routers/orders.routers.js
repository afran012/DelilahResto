const express = require('express')
const router = express.Router()
const ordersController = require('../controllers/orders.controller')

router.get('/', ordersController.getOrders)
router.get('/:id', ordersController.getOrderById)
router.post('/new', ordersController.createOrder)
router.delete('/delete/:id',ordersController.deleteOrder)
router.put('/update/:id',ordersController.updateOrder)
router.put('/updateState/:id',ordersController.updateState)

module.exports = router