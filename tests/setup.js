/**
 * Test Setup and Configuration
 * This file runs before all tests
 */

const chai = require('chai');

// Make expect available globally in tests
global.expect = chai.expect;

// Test environment configuration
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';

console.log('Test environment initialized');
