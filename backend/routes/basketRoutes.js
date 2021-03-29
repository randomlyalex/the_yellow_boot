const { Router } = require('express');
const basketController = require('../controllers/basketControllers');
const router = Router();

router.get('/basket/:query', basketController.getProducts);
router.post('/basket/:query', basketController.addProduct);
router.delete('/basket/:query', basketController.removeProduct);

module.exports = router;
