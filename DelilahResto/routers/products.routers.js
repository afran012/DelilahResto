const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/products.controller')

router.get('/', ProductController.getProduct)
router.get('/:id', ProductController.getProductById)
router.post('/', ProductController.createProduct)
router.delete('/:id',ProductController.deleteProduct)
router.put('/:id',ProductController.updateProduct)

module.exports = router