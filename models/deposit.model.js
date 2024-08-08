// models/deposit.model.js
const db = require('../config/db.config');

class Deposit {
  // Get all deposits
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM meta_ct_deposits');
    return rows;
  }

  // Get a deposit by ID
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM meta_ct_deposits WHERE id = ?', [id]);
    return rows[0];
  }

  // Create a new deposit
  static async create(depositData) {
    const [result] = await db.query('INSERT INTO meta_ct_deposits SET ?', depositData);
    return result.insertId;
  }

  // Update a deposit by ID
  static async update(id, depositData) {
    const [result] = await db.query('UPDATE meta_ct_deposits SET ? WHERE id = ?', [depositData, id]);
    return result.affectedRows;
  }

  // Delete a deposit by ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM meta_ct_deposits WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Deposit;
