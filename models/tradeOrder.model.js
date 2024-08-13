// models/tradeOrder.model.js
const db = require('../config/db.config');

// Get all trade orders
async function getAllTradeOrders() {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_trade_order');
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get a trade order by ID
async function getTradeOrderById(id) {
  try {
    const [rows] = await db.query('SELECT * FROM meta_ct_trade_order WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get trade orders by User ID
async function getTradeOrderByUserId(userId) {
  try {
    const query = `
      SELECT t.*, 
             u.id AS user_id, 
             u.uuid AS user_uuid,
             w.coin_symbol AS coin_symbol,
             w.coin_name AS coin_name,
             w.coin_logo AS coin_logo
      FROM meta_ct_trade_order AS t
      JOIN meta_ct_user AS u 
          ON t.user_id = u.id
      JOIN meta_ct_wallets AS w 
          ON t.wallet_coin_id = w.coin_id
      WHERE t.user_id = ?  
      ORDER BY t.created_at DESC
      LIMIT 0, 50;
    `;

    const [rows] = await db.query(query, [userId]);
    return rows;
  } catch (error) {
    console.error('Error fetching trade orders:', error.message);
    throw new Error('Failed to retrieve trade orders');
  }
}
// Create a new trade order
async function createTradeOrder(tradeOrderData) {
  try {
    const [result] = await db.query('INSERT INTO meta_ct_trade_order SET ?', tradeOrderData);
    return result.insertId;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update a trade order by ID
async function updateTradeOrder(id, tradeOrderData) {
  try {
    const [result] = await db.query('UPDATE meta_ct_trade_order SET ? WHERE id = ?', [tradeOrderData, id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete a trade order by ID
async function deleteTradeOrder(id) {
  try {
    const [result] = await db.query('DELETE FROM meta_ct_trade_order WHERE id = ?', [id]);
    return result.affectedRows;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllTradeOrders,
  getTradeOrderById,
  createTradeOrder,
  updateTradeOrder,
  deleteTradeOrder,
  getTradeOrderByUserId
};
