const express = require('express');
const router = express.Router();

const healthRoutes = require('./health');
const paymentRoutes = require('./payments');

// Mount sub-routes
router.use('/health', healthRoutes);
router.use('/payments', paymentRoutes);

module.exports = router;
