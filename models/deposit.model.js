// models/deposit.model.js
const db = require('../config/db.config');

class Deposit {
  // Get all deposits
  static async getAll() {
    try {
      const query = `
        SELECT d.*, u.uuid AS user_uuid, w.coin_name
        FROM meta_ct_deposits AS d
        JOIN meta_ct_user AS u ON d.user_id = u.id
        JOIN meta_ct_wallets AS w ON d.coin_id = w.coin_id
      `;
      const [rows] = await db.query(query);
      return rows;
    } catch (error) {
      throw new Error(error.message);
    }
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

      // If the update was successful and the status is "approved"
      if (result.affectedRows > 0 && depositData.status === 'approved') {
          
        // Fetch the updated deposit data to get the amount, user_id, and coin_id
        const [updatedDeposit] = await connection.query('SELECT user_id, coin_id, amount FROM meta_ct_deposits WHERE id = ?', [id]);

        if (updatedDeposit.length > 0) {
            const { user_id, coin_id, amount } = updatedDeposit[0];
            const updatingAmount = parseFloat(amount);
            
            // Update the user's balance
            await connection.query(
                'UPDATE meta_ct_user_balance_meta SET coin_amount = coin_amount + ? WHERE user_id = ? AND coin_id = ?',
                [updatingAmount, user_id, coin_id]
            );

            // Update the trade_limit in the meta_ct_user table
            await connection.query(
                'UPDATE meta_ct_user SET trade_limit = ? WHERE id = ?',
                [50, user_id]
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
   static async getLatestDepositByUserId(userId) {
    const query = `
      SELECT d.*, w.coin_name, w.coin_symbol
      FROM meta_ct_deposits AS d
      JOIN meta_ct_wallets AS w ON d.coin_id = w.coin_id
      WHERE d.user_id = ?
      ORDER BY d.created_at DESC
    `;

    try {
      const [rows] = await db.query(query, [userId]);
      return rows;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}



module.exports = Deposit;
