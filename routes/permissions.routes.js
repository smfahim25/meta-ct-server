// routes/permissions.routes.js
const express = require('express');
const router = express.Router();
const permissionsController = require('../controllers/permissions.controller');

// Route to get all permissions
router.get('/', permissionsController.getAllPermissions);

// Route to toggle permission for a user (assign/remove)
router.post('/toggle', permissionsController.togglePermission);
router.get('/user/:userId', permissionsController.getUserWithPermissions);

module.exports = router;
