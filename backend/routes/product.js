const { Router } = require('express');
const itemController = require('../controllers/itemControllers');
const router = Router();

router.get('/products', itemController.get_products);
router.post('/products', itemController.post_product);
router.put('/products/:id', itemController.update_product);
router.delete('/products/:id', itemController.delete_product);

module.exports = router;
