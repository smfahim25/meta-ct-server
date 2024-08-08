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

// Delete a user balance meta by ID
async function deleteUserBalanceMeta(id) {
  try {
    const [result] = await db.query('DELETE FROM meta_ct_user_balance_meta WHERE id = ?', [id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllUserBalanceMetas,
  getUserBalanceMetaById,
  createUserBalanceMeta,
  updateUserBalanceMeta,
  deleteUserBalanceMeta
};
