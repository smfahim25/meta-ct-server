// controllers/tradeOrder.controller.js
const schedule = require('node-schedule');
const tradeOrderModel = require('../models/tradeOrder.model');
const userBalanceMetaModel = require('../models/userBalanceMeta.model');

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


function parseDeliveryTime(deliveryTime) {
  const timeUnit = deliveryTime.slice(-1).toUpperCase(); // Get the last character (S, M, H, D)
  const timeValue = parseInt(deliveryTime.slice(0, -1), 10); // Get the numeric part

  let milliseconds;

  switch (timeUnit) {
    case 'S':
      milliseconds = timeValue * 1000;
      break;
    case 'M':
      milliseconds = timeValue * 60 * 1000;
      break;
    case 'H':
      milliseconds = timeValue * 60 * 60 * 1000;
      break;
    case 'D':
      milliseconds = timeValue * 24 * 60 * 60 * 1000;
      break;
    default:
      throw new Error('Invalid delivery time format');
  }

  return milliseconds;
}




// Create a new trade order
exports.createTradeOrder = async (req, res) => {
  const tradeOrderData = req.body;

  try {
    const newTradeOrderId = await tradeOrderModel.createTradeOrder(tradeOrderData);

    // Parse the delivery time
    const deliveryTimeInMilliseconds = parseDeliveryTime(tradeOrderData.delivery_time);
    const updateTime = new Date(Date.now() + deliveryTimeInMilliseconds);

    // Schedule the status update
    schedule.scheduleJob(updateTime, async () => {
      try {
        // Update trade order status to 'finished'
        await tradeOrderModel.updateTradeOrderStatus(newTradeOrderId, 'finished');

        // Fetch the trade order details
        const tradeOrder = await tradeOrderModel.getTradeOrderById(newTradeOrderId);

        // Check if the trade was profitable
        if (tradeOrder.is_profit === 1) {
          const netProfit =  parseFloat(tradeOrder.amount) + parseFloat(tradeOrder.profit_amount);
          // Increase the user balance by the profit amount
          await userBalanceMetaModel.updateUserBalance(
            tradeOrder.user_id,
            tradeOrder.wallet_coin_id,
            netProfit
          );
        } else {
          const netLose = parseFloat(tradeOrder.amount) - parseFloat(tradeOrder.profit_amount);
          // Decrease the user balance by the profit amount (loss)
          await userBalanceMetaModel.updateUserBalance(
            tradeOrder.user_id,
            tradeOrder.wallet_coin_id,
            netLose
          );
        }
      } catch (error) {
        console.error(`Failed to update status or user balance for trade order ${newTradeOrderId}:`, error.message);
      }
    });

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

// Get Trade Orders by User ID with optional status filtering
exports.getTradeOrdersByUserId = async (req, res) => {
  const { userId } = req.params;
  const { status } = req.query; 

  try {
    const tradeOrders = await tradeOrderModel.getTradeOrderByUserId(userId, status);

    if (tradeOrders.length > 0) {
      res.status(200).json(tradeOrders);
    } else {
      res.status(404).json({ message: 'No trade orders found for this user' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
