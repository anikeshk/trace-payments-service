/**
 * Request validation middleware
 * Example middleware that validates required fields
 */
function validatePaymentRequest(req, res, next) {
  const { amount, currency, customerId } = req.body;

  const errors = [];

  if (!amount || typeof amount !== 'number' || amount <= 0) {
    errors.push('Amount must be a positive number');
  }

  if (!currency || typeof currency !== 'string') {
    errors.push('Currency is required and must be a string');
  }

  if (!customerId || typeof customerId !== 'string') {
    errors.push('Customer ID is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: {
        message: 'Validation failed',
        details: errors
      }
    });
  }

  next();
}

module.exports = {
  validatePaymentRequest
};
