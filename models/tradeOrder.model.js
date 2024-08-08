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
  deleteTradeOrder
};
