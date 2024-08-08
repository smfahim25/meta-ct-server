// routes/deposit.routes.js
const express = require('express');
const depositController = require('../controllers/deposit.controller');

const router = express.Router();

router.get('/', depositController.getAllDeposits);
router.get('/:id', depositController.getDepositById);
router.post('/', depositController.createDeposit);
router.put('/:id', depositController.updateDeposit);
router.delete('/:id', depositController.deleteDeposit);

module.exports = router;
