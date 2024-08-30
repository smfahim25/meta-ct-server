const conversationModel = require('../models/conversation.model');

// Get all conversations with the last message
exports.getAllConversations = async (req, res) => {
    const { user_id } = req.params;

    try {
        const conversations = await conversationModel.getAllConversationsWithLastMessage(user_id);
        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
