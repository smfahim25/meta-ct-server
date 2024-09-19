const TimerProfit = require('../models/timerProfit.model');

// Get all timer profits
exports.getAllTimerProfits = async (req, res) => {
  try {
    const timerProfits = await TimerProfit.getAll();
    res.status(200).json(timerProfits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new timer profit
exports.createTimerProfit = async (req, res) => {
  const timerProfitData = req.body;

  try {
    const newTimerProfitId = await TimerProfit.create(timerProfitData);
    res.status(201).json({ id: newTimerProfitId, ...timerProfitData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a timer profit by ID
exports.deleteTimerProfit = async (req, res) => {
    const { id } = req.params;
    
    try {
      const affectedRows = await TimerProfit.delete(id);
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Timer profit not found' });
      }
      res.status(200).json({ message: 'Timer profit deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Update a timer profit by ID
exports.updateTimerProfit = async (req, res) => {
  const { id } = req.params;
  const timerProfitData = req.body;

  try {
    const affectedRows = await TimerProfit.update(id, timerProfitData);
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Timer profit not found' });
    }
    res.status(200).json({ message: 'Timer profit updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};