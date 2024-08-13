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

module.exports = router;
