const { Router } = require('express');
const basketController = require('../controllers/basketControllers');
const router = Router();

router.get('/basket/:id', basketController.getProducts);
router.post('/basket/:id', basketController.addProduct);
router.delete('/basket/:userId/:itemId', basketController.removeProduct);

module.exports = router;
