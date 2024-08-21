const db = require('../config/db.config');

class TimerProfit {
  // Get all timer profits
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM timer_profits');
    return rows;
  }

  // Create a new timer profit
  static async create(timerProfitData) {
    const { timer, profit, mini_usdt } = timerProfitData;
    const [result] = await db.query(
      'INSERT INTO timer_profits (timer, profit, mini_usdt) VALUES (?, ?, ?)',
      [timer, profit, mini_usdt]
    );
    return result.insertId;
  }

  // Delete a timer profit by ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM timer_profits WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = TimerProfit;
