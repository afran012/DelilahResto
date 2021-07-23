const express = require('express')
const router = express.Router()
const ProductOrderController = require('../controllers/productorder.controller')

router.get('/', ProductOrderController.getProductOrder)
router.get('/:id', ProductOrderController.getProductOrderById)
router.post('/new', ProductOrderController.createProductOrder)
router.delete('/delete/:id',ProductOrderController.deleteProductOrder)
router.put('/update/:id',ProductOrderController.updateProductOrder)

module.exports = router