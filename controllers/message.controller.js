const Message = require('../models/message.model');
const Conversation = require('../models/conversation.model');
const { v4: uuidv4 } = require('uuid');

// Send a new message
exports.sendMessage = async (req, res) => {
  const { userId, recipientId, messageText } = req.body;
  const messageImage = req.file ? req.file.path : null;

  try {
    let anonymousSenderId = null;
    let conversation_id = null;

    // Check if the sender is anonymous
    if (!userId) {
      anonymousSenderId = uuidv4(); // Generate a unique anonymousSenderId
    }

    // Determine if a conversation already exists
    if (userId) {
      // Find conversation between two registered users
      conversation_id = await Conversation.findConversationByUserIds(userId, recipientId);
    } else {
      // Find conversation for an anonymous user
      conversation_id = await Conversation.findConversationForAnonymous(anonymousSenderId, recipientId);
    }

    // If no conversation exists, create a new one
    if (!conversation_id) {
      if (userId) {
        // Create a conversation between two registered users
        conversation_id = await Conversation.createConversation(userId, recipientId);
      } else {
        // Create a conversation involving an anonymous user
        conversation_id = await Conversation.createConversationForAnonymous(anonymousSenderId, recipientId);
      }
    }

    // Insert the message into the database
    const newMessage = await Message.createMessage({
      conversation_id,
      sender_id: userId || null,
      anonymous_sender_id: anonymousSenderId,
      message_text: messageText,
      message_image: messageImage,
      seen: 0
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all messages in a conversation
exports.getMessages = async (req, res) => {
  const { conversation_id, user_id } = req.params;

  try {
    const messages = await Message.getMessagesByConversationId(conversation_id, user_id);

    // Mark messages as seen
    await Message.markMessagesAsSeen(conversation_id, user_id);

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all conversations with the last message
exports.getAllConversations = async (req, res) => {
  try {
    const conversations = await Conversation.getAll();
    
    // Add the last message to each conversation
    for (let conversation of conversations) {
      const lastMessage = await Message.getLastMessageByConversationId(conversation.id);
      conversation.last_message = lastMessage;
    }

    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
