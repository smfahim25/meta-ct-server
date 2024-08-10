const express = require('express');
const cors = require('cors');
const { db } = require('./config');
const userRoutes = require('./routes/user.routes');
const depositRoutes = require('./routes/deposit.routes');
const withdrawRoutes = require('./routes/withdraw.routes');
const userBalanceMetaRoutes = require('./routes/userBalanceMeta.routes');
const tradeOrderRoutes = require('./routes/tradeOrder.routes');
const referralRoutes = require('./routes/referralHistory.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/deposits', depositRoutes);
app.use('/api/v1/withdraws', withdrawRoutes);
app.use('/api/v1/userbalance', userBalanceMetaRoutes);
app.use('/api/v1/tradeorder', tradeOrderRoutes);
app.use('/api/v1/referral', referralRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
