// models/user.model.js

const db = require('../config').db;

const User = {
  findAll: (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  create: (newUser, callback) => {
    const query = 'INSERT INTO users SET ?';
    db.query(query, newUser, (err, results) => {
      if (err) {
        console.error('Error creating user:', err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  // Add other model methods as needed
};

module.exports = User;
