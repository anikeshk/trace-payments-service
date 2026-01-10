const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
const { validatePaymentRequest } = require('../middleware/validateRequest');

// Get all payments
router.get('/', paymentsController.getAllPayments);

// Get payment by ID
router.get('/:id', paymentsController.getPaymentById);

// Create new payment
router.post('/', validatePaymentRequest, paymentsController.createPayment);

// Update payment status
router.patch('/:id/status', paymentsController.updatePaymentStatus);

module.exports = router;
