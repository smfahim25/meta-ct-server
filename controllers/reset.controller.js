// controllers/reset.controller.js

const fs = require('fs');
const path = require('path');
const db = require('../config/db.config'); // Import the connection pool

// Function to delete all files in a directory
const deleteAllFilesInDirectory = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
};

// Reset Database Except Superadmin
exports.resetDatabase = async (req, res) => {
  const connection = await db.getConnection(); // Get a connection from the pool

  try {
    await connection.beginTransaction(); // Start transaction

     // List of tables to reset
     const tables = [
        'meta_ct_trade_order',
        'meta_ct_deposits',
        'meta_ct_withdraws',
        'meta_ct_user_balance_meta',
        'meta_ct_referral_history',
        'timer_profits',
        'settings',
        'meta_ct_wallets',
      ];

    // Delete data from all tables except users
    for (const table of tables) {
      await connection.query(`DELETE FROM ${table}`);
    }

    // Delete all users except superadmin
    await connection.query("DELETE FROM meta_ct_user WHERE role NOT IN ('superadmin')");

    await connection.commit(); // Commit transaction

    // Delete all uploaded files in the uploads directory
    const uploadsDirectory = path.join(__dirname, '../uploads');
    deleteAllFilesInDirectory(uploadsDirectory);

    res.status(200).json({ message: 'Database and uploads reset successfully, except for superadmin.' });
  } catch (error) {
    await connection.rollback(); // Rollback transaction in case of an error
    res.status(500).json({ error: error.message });
  } finally {
    connection.release(); // Release the connection back to the pool
  }
};
