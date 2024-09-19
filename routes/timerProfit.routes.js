const express = require('express');
const router = express.Router();
const timerProfitController = require('../controllers/timerProfit.controller');

// Get all timer profits
router.get('/', timerProfitController.getAllTimerProfits);

// Create a new timer profit
router.post('/', timerProfitController.createTimerProfit);
// Delete a timer profit by ID
router.delete('/:id', timerProfitController.deleteTimerProfit);
// update a timer profit by ID
router.put('/:id', timerProfitController.updateTimerProfit);

module.exports = router;
