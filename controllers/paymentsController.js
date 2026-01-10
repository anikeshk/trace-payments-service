const Payment = require('../models/Payment');
const paymentProcessor = require('../lib/paymentProcessor');

async function getAllPayments(req, res, next) {
  try {
    const payments = Payment.findAll();
    res.json({
      success: true,
      count: payments.length,
      data: payments
    });
  } catch (error) {
    next(error);
  }
}

async function getPaymentById(req, res, next) {
  try {
    const { id } = req.params;
    const payment = Payment.findById(id);

    if (!payment) {
      const error = new Error('Payment not found');
      error.statusCode = 404;
      throw error;
    }

    res.json({
      success: true,
      data: payment
    });
  } catch (error) {
    next(error);
  }
}

async function createPayment(req, res, next) {
  try {
    const { amount, currency, customerId, description } = req.body;

    // Process payment through payment processor
    const processedPayment = await paymentProcessor.processPayment({
      amount,
      currency,
      customerId,
      description
    });

    // Create payment record
    const payment = Payment.create({
      id: processedPayment.id,
      amount,
      currency,
      customerId,
      description,
      status: processedPayment.status,
      transactionId: processedPayment.transactionId,
      createdAt: new Date()
    });

    res.status(201).json({
      success: true,
      data: payment
    });
  } catch (error) {
    next(error);
  }
}

async function updatePaymentStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const payment = Payment.findById(id);

    if (!payment) {
      const error = new Error('Payment not found');
      error.statusCode = 404;
      throw error;
    }

    const updatedPayment = Payment.updateStatus(id, status);

    res.json({
      success: true,
      data: updatedPayment
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePaymentStatus
};
