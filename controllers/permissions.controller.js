// controllers/permissions.controller.js
const db = require('../config/db.config');

// Get all permissions
exports.getAllPermissions = async (req, res) => {
  try {
    const query = 'SELECT * FROM permissions';
    const [permissions] = await db.query(query);
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching permissions', error: error.message });
  }
};

// controllers/permissions.controller.js

// Assign permission to a user
exports.togglePermission = async (req, res) => {
    const { userId, permissionId } = req.body;
  
    if (!userId || !permissionId) {
      return res.status(400).json({ message: 'userId and permissionId are required' });
    }
  
    try {
      // Check if the permission already exists for the user
      const checkQuery = 'SELECT * FROM user_permissions WHERE user_id = ? AND permission_id = ?';
      const [existingPermission] = await db.query(checkQuery, [userId, permissionId]);
  
      if (existingPermission.length > 0) {
        // If the permission exists, remove it
        const deleteQuery = 'DELETE FROM user_permissions WHERE user_id = ? AND permission_id = ?';
        await db.query(deleteQuery, [userId, permissionId]);
        return res.status(200).json({ message: 'Permission removed successfully' });
      } else {
        // If the permission doesn't exist, assign it
        const insertQuery = 'INSERT INTO user_permissions (user_id, permission_id) VALUES (?, ?)';
        await db.query(insertQuery, [userId, permissionId]);
        return res.status(201).json({ message: 'Permission assigned successfully' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error toggling permission', error: error.message });
    }
  };

  // Get a user with their permissions
exports.getUserWithPermissions = async (req, res) => {
    const { userId } = req.params;
  
    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }
  
    try {
      // Query to fetch user details and their permissions
      const userQuery = `
        SELECT u.id as userId, u.name, u.email, p.id as permissionId, p.label
        FROM meta_ct_user u
        LEFT JOIN user_permissions up ON u.id = up.user_id
        LEFT JOIN permissions p ON up.permission_id = p.id
        WHERE u.id = ?;
      `;
  
      const [results] = await db.query(userQuery, [userId]);
  
      if (results.length === 0) {
        return res.status(404).json({ message: 'User not found or no permissions assigned' });
      }
  
      // Group user data and permissions
      const user = {
        userId: results[0].userId,
        name: results[0].name,
        email: results[0].email,
        permissions: results.map((row) => ({
          permissionId: row.permissionId,
          permissionName: row.label,
        })).filter(permission => permission.permissionId !== null) // Exclude null permissions
      };
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user with permissions', error: error.message });
    }
  };