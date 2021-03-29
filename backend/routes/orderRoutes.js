const { Router } = require('express');
const orderController = require('../controllers/orderControllers');
const router = Router();

router.get('/order/:id', orderController.getOrders);
router.post('/order/:id', orderController.createOrder);

module.exports = router;
