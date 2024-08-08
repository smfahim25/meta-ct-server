// services/user.service.js

const User = require('../models/user.model');

exports.getUsers = (callback) => {
  User.findAll(callback);
};

exports.createUser = (newUser, callback) => {
  User.create(newUser, callback);
};

// Add other service methods as needed
