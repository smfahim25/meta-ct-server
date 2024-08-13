const userBalanceMetaModel = require('../models/userBalanceMeta.model');

// Get all user balance metas
exports.getAllUserBalanceMetas = async (req, res) => {
  try {
    const userBalanceMetas = await userBalanceMetaModel.getAllUserBalanceMetas();
    res.status(200).json(userBalanceMetas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a user balance meta by ID
exports.getUserBalanceMetaById = async (req, res) => {
  const { id } = req.params;
  try {
    const userBalanceMeta = await userBalanceMetaModel.getUserBalanceMetaById(id);
    if (userBalanceMeta) {
      res.status(200).json(userBalanceMeta);
    } else {
      res.status(404).json({ message: 'User balance meta not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user balance meta
exports.createUserBalanceMeta = async (req, res) => {
  const balanceMetaData = req.body;
  try {
    const newBalanceMetaId = await userBalanceMetaModel.createUserBalanceMeta(balanceMetaData);
    res.status(201).json({ id: newBalanceMetaId, ...balanceMetaData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a user balance meta by ID
exports.updateUserBalanceMeta = async (req, res) => {
  const { id } = req.params;
  const balanceMetaData = req.body;
  try {
    const affectedRows = await userBalanceMetaModel.updateUserBalanceMeta(id, balanceMetaData);
    if (affectedRows > 0) {
      res.status(200).json({ id, ...balanceMetaData });
    } else {
      res.status(404).json({ message: 'User balance meta not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user balance meta by ID
exports.deleteUserBalanceMeta = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await userBalanceMetaModel.deleteUserBalanceMeta(id);
    if (affectedRows > 0) {
      res.status(200).json({ message: 'User balance meta deleted successfully' });
    } else {
      res.status(404).json({ message: 'User balance meta not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get or Create User Balance by User ID and Coin ID
exports.getUserBalanceByUserIdAndCoinId = async (req, res) => {
  const { userId, coinId } = req.params;

  try {
    const userBalance = await userBalanceMetaModel.getOrCreateUserBalance(userId, coinId);

    if (userBalance) {
      res.status(200).json({
        success: true,
        data: userBalance,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User balance not found or could not be created',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};