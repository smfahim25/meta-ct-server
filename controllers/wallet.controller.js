// controllers/wallet.controller.js
const walletModel = require('../models/wallet.model');

// Get all wallets
exports.getAllWallets = async (req, res) => {
  try {
    const wallets = await walletModel.getAllWallets();
    res.status(200).json(wallets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a wallet by ID
exports.getWalletById = async (req, res) => {
  const { id } = req.params;
  try {
    const wallet = await walletModel.getWalletById(id);
    if (wallet) {
      res.status(200).json(wallet);
    } else {
      res.status(404).json({ message: 'Wallet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new wallet
exports.createWallet = async (req, res) => {
  const walletData = req.body;
  try {
    const newWalletId = await walletModel.createWallet(walletData);
    res.status(201).json({ id: newWalletId, ...walletData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a wallet by ID
exports.updateWallet = async (req, res) => {
  const { id } = req.params;
  const walletData = req.body;
  try {
    const affectedRows = await walletModel.updateWallet(id, walletData);
    if (affectedRows > 0) {
      res.status(200).json({ id, ...walletData });
    } else {
      res.status(404).json({ message: 'Wallet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a wallet by ID
exports.deleteWallet = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await walletModel.deleteWallet(id);
    if (affectedRows > 0) {
      res.status(200).json({ message: 'Wallet deleted successfully' });
    } else {
      res.status(404).json({ message: 'Wallet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
