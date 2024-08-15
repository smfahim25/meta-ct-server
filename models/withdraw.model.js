// models/withdraw.model.js
const db = require('../config/db.config');

class Withdraw {
  // Get all withdrawals
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM meta_ct_withdraws');
    return rows;
  }

  // Get a withdrawal by ID
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM meta_ct_withdraws WHERE id = ?', [id]);
    return rows[0];
  }

  // Get a withdrawal by userID
  static async getByUserId(id) {
    const [rows] = await db.query('SELECT * FROM meta_ct_withdraws WHERE user_id = ?', [id]);
    return rows;
  }


  // Create a new withdrawal
  static async create(withdrawData) {
    const [result] = await db.query('INSERT INTO meta_ct_withdraws SET ?', withdrawData);
    return result.insertId;
  }

  // Update a withdrawal by ID
  static async update(id, withdrawData) {
    const [result] = await db.query('UPDATE meta_ct_withdraws SET ? WHERE id = ?', [withdrawData, id]);
    return result.affectedRows;
  }

  // Delete a withdrawal by ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM meta_ct_withdraws WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Withdraw;
