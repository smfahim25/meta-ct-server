// controllers/deposit.controller.js
const Deposit = require('../models/deposit.model');

// Get all deposits
exports.getAllDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.getAll();
    res.json(deposits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a deposit by ID
exports.getDepositById = async (req, res) => {
  try {
    const deposit = await Deposit.getById(req.params.id);
    if (!deposit) {
      return res.status(404).json({ error: 'Deposit not found' });
    }
    res.json(deposit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new deposit
exports.createDeposit = async (req, res) => {
  try {
    const newDepositId = await Deposit.create(req.body);
    res.status(201).json({ id: newDepositId, ...req.body });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a deposit by ID
exports.updateDeposit = async (req, res) => {
  try {
    const affectedRows = await Deposit.update(req.params.id, req.body);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Deposit not found' });
    }
    res.json({ message: 'Deposit updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a deposit by ID
exports.deleteDeposit = async (req, res) => {
  try {
    const affectedRows = await Deposit.delete(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'Deposit not found' });
    }
    res.json({ message: 'Deposit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
