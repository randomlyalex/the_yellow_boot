const { Router } = require('express');
const productController = require('../controllers/itemControllers');
const router = Router();

router.get('/products', productController.getProducts);
router.get('/products:id', productController.getProductById);
router.post('/products', productController.postProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
