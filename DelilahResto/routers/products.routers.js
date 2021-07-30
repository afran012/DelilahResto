const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/products.controller')
const validadteUserCredentials = require('../middlewares/authentication')

router.get('/', validadteUserCredentials.validateToken , ProductController.getProduct)
router.get('/:id', validadteUserCredentials.validateToken , ProductController.getProductById)
router.post('/', validadteUserCredentials.validateAdmin , ProductController.createProduct)
router.delete('/:id', validadteUserCredentials.validateAdmin , ProductController.deleteProduct)
router.put('/:id', validadteUserCredentials.validateAdmin , ProductController.updateProduct)

module.exports = router