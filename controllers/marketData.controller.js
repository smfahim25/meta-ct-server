const axios = require('axios');

exports.getForexData = async (req, res) => {
    try {
        const apiUrl = 'https://query2.finance.yahoo.com/v7/finance/spark?symbols=EURUSD=X,JPYUSD=X,GBPUSD=X,AUDUSD=X,CADUSD=X,CHFUSD=X&range=1d&interval=1h&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance';
        
        const response = await axios.get(apiUrl);

        if (response.data && response.data.spark && !response.data.spark.error) {
            return res.status(200).json(response.data.spark.result);
        } else {
            return res.status(500).json({ error: 'Failed to fetch forex data.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getForexDataByCoin = async (req, res) => {
    try {
        const { coin } = req.params; // Get the coin symbol from the request parameters
        const apiUrl = `https://query2.finance.yahoo.com/v7/finance/chart/${coin}=X?range=2d&interval=1h&indicators=close&includeTimestamps=true&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance`;

        const response = await axios.get(apiUrl);

        if (response.data && response.data.chart && !response.data.chart.error) {
            return res.status(200).json(response.data.chart.result);
        } else {
            return res.status(500).json({ error: 'Failed to fetch forex data for the specified coin.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to fetch multiple metal market data
exports.getMetalData = async (req, res) => {
    try {
        const apiUrl = 'https://query2.finance.yahoo.com/v7/finance/spark?symbols=ES=F,GC=F,SI=F,CL=F,PL=F&range=2d&interval=1h&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance';

        const response = await axios.get(apiUrl);

        if (response.data && response.data.spark && !response.data.spark.error) {
            return res.status(200).json(response.data.spark.result);
        } else {
            return res.status(500).json({ error: 'Failed to fetch metal market data.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to fetch metal market data by specific metal
exports.getMetalDataByCoin = async (req, res) => {
    try {
        const { coin } = req.params; // Get the metal symbol from the request parameters
        const apiUrl = `https://query2.finance.yahoo.com/v7/finance/chart/${coin}=F?range=2d&interval=1h&indicators=close&includeTimestamps=true&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance`;

        const response = await axios.get(apiUrl);

        if (response.data && response.data.chart && !response.data.chart.error) {
            return res.status(200).json(response.data.chart.result);
        } else {
            return res.status(500).json({ error: 'Failed to fetch metal data for the specified coin.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};