// routes/reset.routes.js

const express = require('express');
const router = express.Router();
const resetController = require('../controllers/reset.controller');

// Endpoint to reset the database except for superadmin
router.post('/', resetController.resetDatabase);

module.exports = router;
