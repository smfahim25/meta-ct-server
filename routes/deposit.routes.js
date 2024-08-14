// routes/deposit.routes.js
const express = require('express');
const depositController = require('../controllers/deposit.controller');
const uploadMiddleware = require('../middlewares/uploadMiddleware'); 

const router = express.Router();

router.get('/', depositController.getAllDeposits);
router.get('/:id', depositController.getDepositById);
router.post('/', uploadMiddleware, depositController.createDeposit);
router.put('/:id', depositController.updateDeposit);
router.delete('/:id', depositController.deleteDeposit);
router.get('/latest/:userId/coin/:coinId', depositController.getLatestDepositByUserIdAndCoinId);
module.exports = router;
