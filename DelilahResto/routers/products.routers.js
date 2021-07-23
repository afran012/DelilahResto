const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/products.controller')

router.get('/', ProductController.getProduct)
router.get('/:id', ProductController.getProductById)
router.post('/new', ProductController.createProduct)
router.delete('/delete/:id',ProductController.deleteProduct)
router.put('/update/:id',ProductController.updateProduct)

module.exports = router