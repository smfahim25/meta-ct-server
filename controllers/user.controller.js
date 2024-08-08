// controllers/user.controller.js

const User = require('../models/user.model');

exports.getAllUsers = (req, res) => {
  User.findAll((err, users) => {
    if (err) {
      res.status(500).send({ message: 'Error retrieving users' });
    } else {
      res.status(200).json(users);
    }
  });
};

exports.createUser = (req, res) => {
  const newUser = req.body;

  User.create(newUser, (err, userId) => {
    if (err) {
      res.status(500).send({ message: 'Error creating user' });
    } else {
      res.status(201).json({ id: userId, ...newUser });
    }
  });
};

// Add other controller methods as needed
