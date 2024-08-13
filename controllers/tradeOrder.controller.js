// controllers/tradeOrder.controller.js
const tradeOrderModel = require('../models/tradeOrder.model');

// Get all trade orders
exports.getAllTradeOrders = async (req, res) => {
  try {
    const tradeOrders = await tradeOrderModel.getAllTradeOrders();
    res.status(200).json(tradeOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a trade order by ID
exports.getTradeOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const tradeOrder = await tradeOrderModel.getTradeOrderById(id);
    if (tradeOrder) {
      res.status(200).json(tradeOrder);
    } else {
      res.status(404).json({ message: 'Trade order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new trade order
exports.createTradeOrder = async (req, res) => {
  const tradeOrderData = req.body;
  try {
    const newTradeOrderId = await tradeOrderModel.createTradeOrder(tradeOrderData);
    res.status(201).json({ id: newTradeOrderId, ...tradeOrderData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a trade order by ID
exports.updateTradeOrder = async (req, res) => {
  const { id } = req.params;
  const tradeOrderData = req.body;
  try {
    const affectedRows = await tradeOrderModel.updateTradeOrder(id, tradeOrderData);
    if (affectedRows > 0) {
      res.status(200).json({ id, ...tradeOrderData });
    } else {
      res.status(404).json({ message: 'Trade order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a trade order by ID
exports.deleteTradeOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await tradeOrderModel.deleteTradeOrder(id);
    if (affectedRows > 0) {
      res.status(200).json({ message: 'Trade order deleted successfully' });
    } else {
      res.status(404).json({ message: 'Trade order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Trade Orders by User ID
// Get Trade Orders by User ID
exports.getTradeOrdersByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const tradeOrders = await tradeOrderModel.getTradeOrderByUserId(userId);

    if (tradeOrders.length > 0) {
      res.status(200).json(tradeOrders);
    } else {
      res.status(404).json({ message: 'No trade orders found for this user' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};