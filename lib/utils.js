/**
 * Utility Functions
 * Common helper functions used across the application
 */

function formatCurrency(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

function generateId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
}

function getCurrentTimestamp() {
  return new Date().toISOString();
}

module.exports = {
  formatCurrency,
  generateId,
  isValidEmail,
  sanitizeInput,
  getCurrentTimestamp
};
