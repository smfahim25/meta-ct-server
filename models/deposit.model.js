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
    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      // Update the deposit
      const [result] = await connection.query('UPDATE meta_ct_deposits SET ? WHERE id = ?', [depositData, id]);

      // If the update was successful and the status is "completed"
      if (result.affectedRows > 0 && depositData.status === 'completed') {
        // Fetch the updated deposit data to get the amount, user_id, and coin_id
        const [updatedDeposit] = await connection.query('SELECT user_id, coin_id, amount FROM meta_ct_deposits WHERE id = ?', [id]);

        if (updatedDeposit.length > 0) {
          const { user_id, coin_id, amount } = updatedDeposit[0];

          // Update the user's balance
          await connection.query(
            'UPDATE meta_ct_user_balance_meta SET usd_amount = usd_amount + ? WHERE user_id = ? AND coin_id = ?',
            [amount, user_id, coin_id]
          );
        }
      }

      await connection.commit();
      return result.affectedRows;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // Delete a deposit by ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM meta_ct_deposits WHERE id = ?', [id]);
    return result.affectedRows;
  }

  // get latest deposit by coin and user id 
  static async getLatestDepositByUserIdAndCoinId (userId, coinId){
    const query = `
      SELECT *
      FROM meta_ct_deposits
      WHERE user_id = ? AND coin_id = ?
      ORDER BY created_at DESC
      LIMIT 1
    `;
    
    try {
      const [rows] = await db.query(query, [userId, coinId]);
      return rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  };

   // get all deposit by user id 
   static async getLatestDepositByUserId(userId){
    const query = `
      SELECT *
      FROM meta_ct_deposits
      WHERE user_id = ?
      ORDER BY created_at DESC
    `;
    
    try {
      const [rows] = await db.query(query, [userId]);
      return rows;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}



module.exports = Deposit;
