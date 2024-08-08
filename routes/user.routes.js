// routes/user.routes.js

const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// GET /api/users
router.get('/', userController.getAllUsers);

// POST /api/users
router.post('/', userController.createUser);

// Add other routes as needed

module.exports = router;
