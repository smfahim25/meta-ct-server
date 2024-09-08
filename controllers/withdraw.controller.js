// controllers/withdraw.controller.js
const Withdraw = require('../models/withdraw.model');
const { getReceiverSocketId, io } = require('../socket/socket');

// Get all withdrawals
exports.getAllWithdrawals = async (req, res) => {
  try {
    const withdrawals = await Withdraw.getAll();
    res.json(withdrawals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a withdrawal by ID
exports.getWithdrawalById = async (req, res) => {
  try {
    const withdrawal = await Withdraw.getById(req.params.id);
    if (!withdrawal) {
      return res.status(404).json({ error: 'Withdrawal not found' });
    }
    res.json(withdrawal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a withdrawal by ID
exports.getWithdrawalByUserId = async (req, res) => {
  try {
    const withdrawal = await Withdraw.getByUserId(req.params.userID);
    if (!withdrawal) {
      return res.status(404).json({ error: 'Withdrawal not found' });
    }
    res.json(withdrawal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new withdrawal
exports.createWithdrawal = async (req, res) => {
  try {
    const newWithdrawalId = await Withdraw.create(req.body);
    if(newWithdrawalId){
      const receiverSocketId = getReceiverSocketId(0);
      // Emit updated deposit to the receiver
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("newWithdraw", {
          id: newWithdrawalId, ...req.body
        });
      }
  
    }
    res.status(201).json({ id: newWithdrawalId, ...req.body });
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a withdrawal by ID
exports.updateWithdrawal = async (req, res) => {
  try {
    const affectedRows = await Withdraw.update(req.params.id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Withdrawal not found' });
    }
    res.json({ message: 'Withdrawal updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a withdrawal by ID
exports.deleteWithdrawal = async (req, res) => {
  try {
    const affectedRows = await Withdraw.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Withdrawal not found' });
    }
    res.json({ message: 'Withdrawal deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
