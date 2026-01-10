/**
 * Payment Model
 * In a real application, this would interact with a database through an ORM
 * This is a simple in-memory implementation for demo purposes
 */

// In-memory storage for demo purposes
const payments = [];

class Payment {
  static findAll() {
    return payments;
  }

  static findById(id) {
    return payments.find(payment => payment.id === id);
  }

  static create(paymentData) {
    const payment = {
      id: paymentData.id || `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      amount: paymentData.amount,
      currency: paymentData.currency,
      customerId: paymentData.customerId,
      description: paymentData.description || '',
      status: paymentData.status || 'pending',
      transactionId: paymentData.transactionId,
      createdAt: paymentData.createdAt || new Date(),
      updatedAt: new Date()
    };

    payments.push(payment);
    return payment;
  }

  static updateStatus(id, status) {
    const payment = this.findById(id);
    if (payment) {
      payment.status = status;
      payment.updatedAt = new Date();
    }
    return payment;
  }

  static delete(id) {
    const index = payments.findIndex(payment => payment.id === id);
    if (index !== -1) {
      payments.splice(index, 1);
      return true;
    }
    return false;
  }

  static clear() {
    payments.length = 0;
  }
}

module.exports = Payment;
