// models/userBalanceMeta.model.js
const db = require('../config/db.config');

// Get all user balance metas
async function getAllUserBalanceMetas() {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_user_balance_meta');
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get a user balance meta by ID
async function getUserBalanceMetaById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_user_balance_meta WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

// Create a new user balance meta
async function createUserBalanceMeta(balanceMetaData) {
  try {
    const [result] = await db.query('INSERT INTO meta_ct_user_balance_meta SET ?', balanceMetaData);
    return result.insertId;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update a user balance meta by ID
async function updateUserBalanceMeta(id, balanceMetaData) {
  try {
    const [result] = await db.query('UPDATE meta_ct_user_balance_meta SET ? WHERE id = ?', [balanceMetaData, id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

 async function updateUserBalance(userId, coinId, amount) {
  try {
    const [rows] = await db.query(
      'SELECT * FROM meta_ct_user_balance_meta WHERE user_id = ? AND coin_id = ?',
      [userId, coinId]
    );

    if (rows.length > 0) {
      // Update the existing balance
      await db.query(
        'UPDATE meta_ct_user_balance_meta SET coin_amount = coin_amount + ?, updated_at = NOW() WHERE user_id = ? AND coin_id = ?',
        [amount, userId, coinId]
      );
    } else {
      // Insert a new balance entry if it doesn't exist
      await db.query(
        'INSERT INTO meta_ct_user_balance_meta (user_id, coin_id, coin_amount, usd_amount, created_at, updated_at) VALUES (?, ?, ?, 0, NOW(), NOW())',
        [userId, coinId, amount]
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete a user balance meta by ID
async function deleteUserBalanceMeta(id) {
  try {
    const [result] = await db.query('DELETE FROM meta_ct_user_balance_meta WHERE id = ?', [id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get or Create User Balance by User ID and Coin ID
async function getOrCreateUserBalance(userId, coinId) {
  try {
    // Query to fetch the user balance by userId and coinId
    const query = `
      SELECT * FROM meta_ct_user_balance_meta
      WHERE user_id = ? AND coin_id = ?
    `;

    const [rows] = await db.query(query, [userId, coinId]);

    if (rows.length > 0) {
      return rows[0];
    } else {
      // If no balance exists, insert a new record
      const insertQuery = `
        INSERT INTO meta_ct_user_balance_meta (user_id, coin_id, created_at, updated_at)
        VALUES (?, ?, NOW(), NOW())
      `;

      const [result] = await db.query(insertQuery, [userId, coinId]);

      if (result.affectedRows === 1) {
        const [newBalance] = await db.query(query, [userId, coinId]);
        return newBalance[0];
      }
    }
  } catch (error) {
    console.error('Error fetching or creating user balance:', error.message);
    throw new Error('Failed to retrieve or create user balance');
  }
}

// Update User Balance by User ID and Coin ID
async function updateUserBalanceCoinAmount(userId, coinId, coinAmount) {
  try {
    const query = `
      UPDATE meta_ct_user_balance_meta
      SET coin_amount = ?, updated_at = NOW()
      WHERE user_id = ? AND coin_id = ?
    `;

    const [result] = await db.query(query, [coinAmount, userId, coinId]);

    return result.affectedRows > 0;
  } catch (error) {
    console.error('Error updating user balance:', error.message);
    throw new Error('Failed to update user balance');
  }
}


module.exports = {
  getAllUserBalanceMetas,
  getUserBalanceMetaById,
  createUserBalanceMeta,
  updateUserBalanceMeta,
  updateUserBalance,
  deleteUserBalanceMeta,
  getOrCreateUserBalance,
  updateUserBalanceCoinAmount
};
