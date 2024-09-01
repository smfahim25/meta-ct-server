// message.controller.js file 
const Message = require('../models/message.model');
const Conversation = require('../models/conversation.model');
const { v4: uuidv4 } = require('uuid');

// Send a new message
exports.sendMessage = async (req, res) => {
  const { userId, recipientId, messageText, senderType } = req.body; // senderType can be 'user' or 'admin'
  const messageImage = req.file ? req.file.path : null;

  try {
    let anonymousSenderId = null;
    let conversation_id = null;

    // Check if the sender is anonymous
    if (!userId && senderType !== 'admin') {
      anonymousSenderId = uuidv4(); // Generate a unique anonymousSenderId
    }

    // Determine if a conversation already exists
    if (senderType === 'user' || senderType === 'admin') {
      // Find conversation between the user/admin and recipient
      conversation_id = await Conversation.findConversationByUserIds(userId || recipientId, recipientId);
    } else {
      // Find conversation for an anonymous user
      conversation_id = await Conversation.findConversationForAnonymous(anonymousSenderId, recipientId);
    }

    // If no conversation exists, create a new one
    if (!conversation_id) {
      if (senderType === 'user' || senderType === 'admin') {
        // Create a conversation between the user/admin and recipient
        conversation_id = await Conversation.createConversation(userId || recipientId, recipientId);
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
      seen: 0,
      sender_type: senderType || 'user' // Set sender_type based on input, default to 'user'
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
