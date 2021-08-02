const express = require('express')
const router = express.Router()
const ordersController = require('../controllers/orders.controller')
const validadteUserCredentials = require('../middlewares/authentication')

router.get('/', validadteUserCredentials.validateAdmin ,  ordersController.getOrders)
router.get('/:id', validadteUserCredentials.validateToken ,  ordersController.getOrderById)
router.post('/', validadteUserCredentials.validateToken ,  ordersController.createOrder)
router.delete('/:id', validadteUserCredentials.validateAdmin , ordersController.deleteOrder)
router.put('/:id', validadteUserCredentials.validateAdmin , ordersController.updateOrder)
router.put('/updateState/:id', validadteUserCredentials.validateAdmin , ordersController.updateState)
router.get('/users/:id', validadteUserCredentials.validateAdmin ,  ordersController.getOrderByUserID)

module.exports = router