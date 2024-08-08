// routes/withdraw.routes.js
const express = require('express');
const withdrawController = require('../controllers/withdraw.controller');

const router = express.Router();

router.get('/', withdrawController.getAllWithdrawals);
router.get('/:id', withdrawController.getWithdrawalById);
router.post('/', withdrawController.createWithdrawal);
router.put('/:id', withdrawController.updateWithdrawal);
router.delete('/:id', withdrawController.deleteWithdrawal);

module.exports = router;
