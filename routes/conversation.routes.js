const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversation.controller');

// Get all conversations with the last message
router.get('/user/:user_id', conversationController.getAllConversations);
router.get('/', conversationController.getAllConversationsForAdmin);
// Delete a conversation by ID
router.delete('/:conversationId', conversationController.deleteConversation);

module.exports = router;
