const { expect } = require('chai');
const Payment = require('../models/Payment');
const paymentProcessor = require('../lib/paymentProcessor');

describe('Payment Processing', function() {
  beforeEach(function() {
    // Clear payments before each test
    Payment.clear();
  });

  describe('Payment Model', function() {
    it('should create a new payment', function() {
      const paymentData = {
        amount: 100.50,
        currency: 'USD',
        customerId: 'cust_123',
        description: 'Test payment',
        status: 'pending'
      };

      const payment = Payment.create(paymentData);

      expect(payment).to.have.property('id');
      expect(payment.amount).to.equal(100.50);
      expect(payment.currency).to.equal('USD');
      expect(payment.customerId).to.equal('cust_123');
      expect(payment.status).to.equal('pending');
    });

    it('should find payment by id', function() {
      const payment = Payment.create({
        amount: 50,
        currency: 'USD',
        customerId: 'cust_456',
        status: 'completed'
      });

      const foundPayment = Payment.findById(payment.id);
      expect(foundPayment).to.deep.equal(payment);
    });

    it('should update payment status', function() {
      const payment = Payment.create({
        amount: 75,
        currency: 'EUR',
        customerId: 'cust_789',
        status: 'pending'
      });

      const updatedPayment = Payment.updateStatus(payment.id, 'completed');
      expect(updatedPayment.status).to.equal('completed');
    });

    it('should return all payments', function() {
      Payment.create({
        amount: 100,
        currency: 'USD',
        customerId: 'cust_1',
        status: 'completed'
      });

      Payment.create({
        amount: 200,
        currency: 'EUR',
        customerId: 'cust_2',
        status: 'pending'
      });

      const allPayments = Payment.findAll();
      expect(allPayments).to.have.lengthOf(2);
    });
  });

  describe('Payment Processor', function() {
    it('should validate payment amount', function() {
      const invalidPayment = {
        amount: -10,
        currency: 'USD',
        customerId: 'cust_123'
      };

      expect(() => paymentProcessor.validatePayment(invalidPayment))
        .to.throw('Invalid payment amount');
    });

    it('should require currency', function() {
      const invalidPayment = {
        amount: 100,
        customerId: 'cust_123'
      };

      expect(() => paymentProcessor.validatePayment(invalidPayment))
        .to.throw('Currency is required');
    });

    it('should require customer ID', function() {
      const invalidPayment = {
        amount: 100,
        currency: 'USD'
      };

      expect(() => paymentProcessor.validatePayment(invalidPayment))
        .to.throw('Customer ID is required');
    });

    it('should generate transaction ID', function() {
      const transactionId = paymentProcessor.generateTransactionId();
      expect(transactionId).to.be.a('string');
      expect(transactionId).to.match(/^txn_/);
    });
  });
});
