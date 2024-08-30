const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');
const uploadMiddleware = require('../middlewares/uploadMiddleware'); 

// Send a message with image upload capability
router.post('/send', uploadMiddleware, messageController.sendMessage);

// Get all messages in a conversation
router.get('/:conversation_id/user/:user_id', messageController.getMessages);

module.exports = router;
