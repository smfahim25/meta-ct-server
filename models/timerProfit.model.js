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

  // Update a timer profit by ID
  static async update(id, timerProfitData) {
    const { timer, profit, mini_usdt } = timerProfitData;
    const [result] = await db.query(
      'UPDATE timer_profits SET timer = ?, profit = ?, mini_usdt = ? WHERE id = ?',
      [timer, profit, mini_usdt, id]
    );
    return result.affectedRows;
  }
}

module.exports = TimerProfit;
