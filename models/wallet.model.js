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

async function getAllWalletsWithUserBalance(userId) {
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    // Get all wallets
    const [wallets] = await connection.query('SELECT * FROM meta_ct_wallets');

    const userBalances = [];
    let grandTotalDeposits = 0;
    let grandTotalWithdrawals = 0;

    for (const wallet of wallets) {
      const { coin_id } = wallet;

      // Check if a balance entry exists for the user and this coin
      const [balance] = await connection.query(
        'SELECT * FROM meta_ct_user_balance_meta WHERE user_id = ? AND coin_id = ?',
        [userId, coin_id]
      );

      // If no balance entry exists, create it with default values
      if (balance.length === 0) {
        await connection.query(
          'INSERT INTO meta_ct_user_balance_meta (user_id, coin_id, coin_amount, usd_amount, created_at, updated_at) VALUES (?, ?, 0.0000000, 0.0000000, NOW(), NOW())',
          [userId, coin_id]
        );
      }

      // Retrieve the updated balance (whether newly created or existing)
      const [updatedBalance] = await connection.query(
        'SELECT * FROM meta_ct_user_balance_meta WHERE user_id = ? AND coin_id = ?',
        [userId, coin_id]
      );

      // Calculate total deposits and total withdrawals for this wallet
      const [totalDeposits] = await connection.query(
        'SELECT SUM(amount) AS total_deposits FROM meta_ct_deposits WHERE user_id = ? AND coin_id = ?',
        [userId, coin_id]
      );

      const [totalWithdrawals] = await connection.query(
        'SELECT SUM(amount) AS total_withdrawals FROM meta_ct_withdrawals WHERE user_id = ? AND coin_id = ?',
        [userId, coin_id]
      );

      const depositAmount = totalDeposits[0].total_deposits || 0;
      const withdrawalAmount = totalWithdrawals[0].total_withdrawals || 0;

      // Accumulate grand totals
      grandTotalDeposits += parseFloat(depositAmount);
      grandTotalWithdrawals += parseFloat(withdrawalAmount);

      userBalances.push({
        ...wallet,
        coin_amount: updatedBalance[0].coin_amount,
        usd_amount: updatedBalance[0].usd_amount,
        total_deposits: depositAmount,
        total_withdrawals: withdrawalAmount,
      });
    }

    await connection.commit();
    return {
      userBalances,
      grandTotalDeposits,
      grandTotalWithdrawals,
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
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
  getAllWalletsWithUserBalance,
};
