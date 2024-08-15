const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');

// Route to get all wallets
router.get('/', walletController.getAllWallets);
router.get('/:id', walletController.getWalletById);
router.get('/user/:userId', walletController.getAllWalletsWithUserBalance);

// Route to create a new wallet
router.post('/', walletController.createWallet);

// Route to update a wallet by ID
router.put('/:id', walletController.updateWallet);

// Route to delete a wallet by ID
router.delete('/:id', walletController.deleteWallet);

module.exports = router;
