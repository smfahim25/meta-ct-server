const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');
const uploadMiddleware = require('../middlewares/uploadMiddleware'); 

// Route to get all wallets
router.get('/', walletController.getAllWallets);
router.get('/:id', walletController.getWalletById);
router.get('/user/:userId', walletController.getAllWalletsWithUserBalance);
router.post('/', uploadMiddleware,walletController.createWallet);
router.put('/:id', uploadMiddleware,walletController.updateWallet);
router.delete('/:id', walletController.deleteWallet);

module.exports = router;
