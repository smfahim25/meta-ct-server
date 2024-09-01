// conversation.model.js 
const db = require('../config/db.config');

// Get all conversations for user with the last message
exports.getAllConversationsWithLastMessage = async (userId) => {
  const query = `
    SELECT c.id AS conversation_id, 
           c.user1_id, 
           c.user2_id, 
           c.anonymous_user_id,
           COALESCE(u1.uuid, 'Anonymous') AS user1_uuid, 
           COALESCE(u2.uuid, 'Anonymous') AS user2_uuid,
           m.message_text AS last_message,
           m.created_at AS last_message_time
    FROM conversations AS c
    LEFT JOIN messages AS m ON m.id = (
        SELECT id 
        FROM messages 
        WHERE conversation_id = c.id 
        ORDER BY created_at DESC 
        LIMIT 1
    )
    LEFT JOIN meta_ct_user AS u1 ON c.user1_id = u1.id
    LEFT JOIN meta_ct_user AS u2 ON c.user2_id = u2.id
    WHERE c.user1_id = ? OR c.user2_id = ?
    ORDER BY m.created_at DESC;
`;


  try {
      const [rows] = await db.query(query, [userId, userId]);
      return rows;
  } catch (error) {
      throw new Error(error.message);
  }
};

// Get all conversations (for admin)
exports.getAllConversationsForAdmin = async () => {
  const query = `
    SELECT c.id AS conversation_id, 
           c.user1_id, 
           c.user2_id, 
           c.anonymous_user_id,
           COALESCE(u1.uuid, 'Anonymous') AS user1_uuid, 
            COALESCE(u1.name, 'Anonymous') AS user1_name, 
            COALESCE(u2.uuid, 'Anonymous') AS user2_uuid,
            COALESCE(u2.name, 'Anonymous') AS user2_name, 
           m.message_text AS last_message,
           m.created_at AS last_message_time
    FROM conversations AS c
    LEFT JOIN messages AS m ON m.id = (
        SELECT id 
        FROM messages 
        WHERE conversation_id = c.id 
        ORDER BY created_at DESC 
        LIMIT 1
    )
    LEFT JOIN meta_ct_user AS u1 ON c.user1_id = u1.id
    LEFT JOIN meta_ct_user AS u2 ON c.user2_id = u2.id
    ORDER BY m.created_at DESC;
  `;

  try {
    const [rows] = await db.query(query);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};


// Find an existing conversation between a user/admin and recipient
exports.findConversationByUserIds = async (user1Id, user2Id) => {
  const query = `
    SELECT id 
    FROM conversations 
    WHERE (user1_id = ? AND user2_id = ?) OR (user1_id = ? AND user2_id = ?)
  `;
  const [rows] = await db.query(query, [user1Id, user2Id, user2Id, user1Id]);
  return rows.length ? rows[0].id : null;
};
  
  // Find an existing conversation for an anonymous user
  exports.findConversationForAnonymous = async (anonymousSenderId, recipientId)=> {
    const query = `
      SELECT id 
      FROM conversations 
      WHERE anonymous_user_id = ? AND (user1_id = ? OR user2_id = ?)
    `;
    const [rows] = await db.query(query, [anonymousSenderId, recipientId, recipientId]);
    return rows.length ? rows[0].id : null;
  }

  // Create a new conversation between two registered users
exports.createConversation = async (user1Id, user2Id) => {
    const query = `
      INSERT INTO conversations (user1_id, user2_id) 
      VALUES (?, ?)
    `;
    const [result] = await db.query(query, [user1Id, user2Id]);
    return result.insertId;
  }
  
  // Create a new conversation for an anonymous user
  exports.createConversationForAnonymous = async(anonymousSenderId, recipientId) => {
    const query = `
      INSERT INTO conversations (anonymous_user_id, user1_id) 
      VALUES (?, ?)
    `;
    const [result] = await db.query(query, [anonymousSenderId, recipientId]);
    return result.insertId;
  }
  