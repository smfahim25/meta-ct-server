// models/wallet.model.js
const db = require('../config/db.config');

// Get all wallets
async function getAllWallets() {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_wallets');
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get a wallet by ID
async function getWalletById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_wallets WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

// Create a new wallet
async function createWallet(walletData) {
  try {
    const [result] = await db.query('INSERT INTO meta_ct_wallets SET ?', walletData);
    return result.insertId;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update a wallet by ID
async function updateWallet(id, walletData) {
  try {
    const [result] = await db.query('UPDATE meta_ct_wallets SET ? WHERE id = ?', [walletData, id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete a wallet by ID
async function deleteWallet(id) {
  try {
    const [result] = await db.query('DELETE FROM meta_ct_wallets WHERE id = ?', [id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllWallets,
  getWalletById,
  createWallet,
  updateWallet,
  deleteWallet,
};
