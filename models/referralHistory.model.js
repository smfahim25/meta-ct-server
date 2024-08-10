// models/referralHistory.model.js
const db = require('../config/db.config');

// Get all referral histories
async function getAllReferralHistories() {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_referral_history');
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get a referral history by ID
async function getReferralHistoryById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_referral_history WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

// Create a new referral history
async function createReferralHistory(referralHistoryData) {
  try {
    const [result] = await db.query('INSERT INTO meta_ct_referral_history SET ?', referralHistoryData);
    return result.insertId;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update a referral history by ID
async function updateReferralHistory(id, referralHistoryData) {
  try {
    const [result] = await db.query('UPDATE meta_ct_referral_history SET ? WHERE id = ?', [referralHistoryData, id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete a referral history by ID
async function deleteReferralHistory(id) {
  try {
    const [result] = await db.query('DELETE FROM meta_ct_referral_history WHERE id = ?', [id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllReferralHistories,
  getReferralHistoryById,
  createReferralHistory,
  updateReferralHistory,
  deleteReferralHistory
};
