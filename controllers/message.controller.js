// message.controller.js file 
const Message = require('../models/message.model');
const Conversation = require('../models/conversation.model');
const { v4: uuidv4 } = require('uuid');
const { getReceiverSocketId, io } = require('../socket/socket');

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
      if (senderType === 'user') {
        // User is sending message, find conversation between user and admin (admin's id assumed to be 0)
        conversation_id = await Conversation.findConversationByUserIds(userId, 0);
      } else {
        // Admin is sending message, find conversation between recipient (user) and admin (id = 0)
        conversation_id = await Conversation.findConversationByUserIds(recipientId, 0);
      }
    } else {
      // Find conversation for an anonymous user
      conversation_id = await Conversation.findConversationForAnonymous(anonymousSenderId, 0);
    }

    // If no conversation exists, create a new one
    if (!conversation_id) {
      if (senderType === 'user' || senderType === 'admin') {
        // Create a conversation between the user/admin and recipient
        if (senderType === 'user') {
          conversation_id = await Conversation.createConversation(userId, 0);
        } else {
          conversation_id = await Conversation.createConversation(recipientId, 0);
        }
      } else {
        // Create a conversation involving an anonymous user
        conversation_id = await Conversation.createConversationForAnonymous(anonymousSenderId, 0);
      }
    }

    // Insert the user's/admin's message into the database
    const newMessage = await Message.createMessage({
      conversation_id,
      sender_id: userId || null,
      anonymous_sender_id: anonymousSenderId,
      message_text: messageText,
      message_image: messageImage,
      seen: 0,
      sender_type: senderType || 'user',
    });

    // Emit the new message to the client (either admin or user depending on recipient)
    const receiverSocketId = getReceiverSocketId(recipientId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    // After saving, get unread messages for that conversation
    const unreadCount = await Message.getUnreadMessagesCount(newMessage.conversation_id);
    const unreadConversationsCount = await Message.getUnreadConversationsCount();

    // Emit unread message count to the receiver
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("getUnreadMessage", {
        unreadConversationsCount,
      });
    }

    // Check if this is the first message in the conversation and send a default reply
    const previousMessages = await Message.getMessagesByConversationId(newMessage.conversation_id);
    if (previousMessages.length === 1 && senderType === 'user') {
      // This is the first message from the user, send a default reply
      const defaultReply = {
        conversation_id: newMessage.conversation_id,
        sender_id: 0, // Admin or system ID
        recipient_id: newMessage.sender_id || recipientId, // Reply to the user who sent the first message
        message_text: "Thank you for reaching out to us. Our team will respond shortly.",
        seen: 0,
        sender_type: 'admin',
      };

      // Save the default reply to the database
      const defaultReplyMessage = await Message.createMessage(defaultReply);

      // Emit the default reply to the user
      const userSocketId = getReceiverSocketId(newMessage.sender_id || recipientId);
      if (userSocketId) {
        io.to(userSocketId).emit("newMessage", defaultReplyMessage);
      }
    }

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
    const receiverSocketId = getReceiverSocketId(0);
    const unreadConversationsCount = await Message.getUnreadConversationsCount();

    // Emit unread message count to the receiver
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("getUnreadMessage", {
        unreadConversationsCount,
      });
    }

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
