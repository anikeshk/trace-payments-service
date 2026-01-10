/**
 * Payment Processor
 * Core business logic for processing payments
 * This is a simplified demo implementation
 */

class PaymentProcessor {
  async processPayment(paymentData) {
    const { amount, currency, customerId, description } = paymentData;

    // Simulate payment processing delay
    await this.delay(100);

    // Validate payment data
    this.validatePayment(paymentData);

    // Generate transaction ID
    const transactionId = this.generateTransactionId();

    // Simulate payment gateway interaction
    const status = await this.chargeCustomer(amount, currency, customerId);

    return {
      id: `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      transactionId,
      status,
      amount,
      currency,
      customerId,
      description,
      processedAt: new Date()
    };
  }

  validatePayment(paymentData) {
    if (!paymentData.amount || paymentData.amount <= 0) {
      throw new Error('Invalid payment amount');
    }

    if (!paymentData.currency) {
      throw new Error('Currency is required');
    }

    if (!paymentData.customerId) {
      throw new Error('Customer ID is required');
    }
  }

  async chargeCustomer(amount, currency, customerId) {
    // Simulate payment gateway call
    await this.delay(50);

    // Simulate success rate (95% success for demo)
    const success = Math.random() > 0.05;

    return success ? 'completed' : 'failed';
  }

  generateTransactionId() {
    return `txn_${Date.now()}_${Math.random().toString(36).substr(2, 15)}`;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = new PaymentProcessor();
