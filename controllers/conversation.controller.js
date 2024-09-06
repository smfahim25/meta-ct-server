// conversation.model.js 
const conversationModel = require('../models/conversation.model');
const Message = require('../models/message.model');

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

// Get all conversations with unread message count
// exports.getAllConversations = async (req, res) => {
//   try {
//     const { user_id } = req.params;

//     // Get all conversations for the user
//     const conversations = await conversationModel.getAllConversationsWithLastMessage(user_id);

//     // Add the unread message count to each conversation
//     for (let conversation of conversations) {
//       const unreadCount = await Message.getUnreadMessagesCount(conversation.id, user_id);
//       conversation.unread_count = unreadCount;
//     }

//     // Get total number of unread conversations (how many users have sent new messages)
//     const unreadConversationsCount = await Message.getUnreadConversationsCount(user_id);

//     res.status(200).json({ conversations, unreadConversationsCount });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Get all conversations for admin
exports.getAllConversationsForAdmin = async (req, res) => {
    try {
      const conversations = await conversationModel.getAllConversationsForAdmin();
      
    for (let conversation of conversations) {
      const unreadCount = await Message.getUnreadMessagesCount(conversation.conversation_id);
      conversation.unread_count = unreadCount;
    }

    // Get total number of unread conversations (how many users have sent new messages)
    const unreadConversationsCount = await Message.getUnreadConversationsCount();

      res.status(200).json({ conversations, unreadConversationsCount });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };