// controllers/referralHistory.controller.js
const referralHistoryModel = require('../models/referralHistory.model');

// Get all referral histories
exports.getAllReferralHistories = async (req, res) => {
  try {
    const referralHistories = await referralHistoryModel.getAllReferralHistories();
    res.status(200).json(referralHistories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a referral history by ID
exports.getReferralHistoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const referralHistory = await referralHistoryModel.getReferralHistoryById(id);
    if (referralHistory) {
      res.status(200).json(referralHistory);
    } else {
      res.status(404).json({ message: 'Referral history not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new referral history
exports.createReferralHistory = async (req, res) => {
  const referralHistoryData = req.body;
  try {
    const newReferralHistoryId = await referralHistoryModel.createReferralHistory(referralHistoryData);
    res.status(201).json({ id: newReferralHistoryId, ...referralHistoryData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a referral history by ID
exports.updateReferralHistory = async (req, res) => {
  const { id } = req.params;
  const referralHistoryData = req.body;
  try {
    const affectedRows = await referralHistoryModel.updateReferralHistory(id, referralHistoryData);
    if (affectedRows > 0) {
      res.status(200).json({ id, ...referralHistoryData });
    } else {
      res.status(404).json({ message: 'Referral history not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a referral history by ID
exports.deleteReferralHistory = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await referralHistoryModel.deleteReferralHistory(id);
    if (affectedRows > 0) {
      res.status(200).json({ message: 'Referral history deleted successfully' });
    } else {
      res.status(404).json({ message: 'Referral history not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
