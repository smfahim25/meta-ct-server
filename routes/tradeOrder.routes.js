const express = require('express');
const router = express.Router();
const tradeOrderController = require('../controllers/tradeOrder.controller');


router.get('/', tradeOrderController.getAllTradeOrders);
router.get('/:id', tradeOrderController.getTradeOrderById);
router.post('/', tradeOrderController.createTradeOrder);
router.put('/:id', tradeOrderController.updateTradeOrder);
router.delete('/:id', tradeOrderController.deleteTradeOrder);

module.exports = router;
