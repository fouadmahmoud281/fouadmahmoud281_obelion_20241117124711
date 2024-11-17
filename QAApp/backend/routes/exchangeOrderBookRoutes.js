const express = require('express');
const router = express.Router();
const exchangeOrderBookController = require('../controllers/exchangeOrderBookController');

router.post('/orders', exchangeOrderBookController.createOrder);
router.get('/orders', exchangeOrderBookController.getAllOrders);
router.get('/orders/:id', exchangeOrderBookController.getOrderById);
router.put('/orders/:id', exchangeOrderBookController.updateOrder);
router.delete('/orders/:id', exchangeOrderBookController.deleteOrder);

module.exports = router;