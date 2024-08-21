const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings.controller');

// GET settings
router.get('/', settingsController.getSettings);

// PUT settings
router.put('/', settingsController.updateSettings);

module.exports = router;
