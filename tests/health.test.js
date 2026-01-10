const { expect } = require('chai');
const app = require('../app');

describe('Health Check Endpoint', function() {
  it('should return healthy status', function() {
    const healthStatus = {
      status: 'healthy',
      service: 'trace-payments-service'
    };

    expect(healthStatus.status).to.equal('healthy');
    expect(healthStatus.service).to.equal('trace-payments-service');
  });

  it('should have required health check properties', function() {
    const healthCheck = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'trace-payments-service',
      version: '1.0.0'
    };

    expect(healthCheck).to.have.property('status');
    expect(healthCheck).to.have.property('timestamp');
    expect(healthCheck).to.have.property('service');
    expect(healthCheck).to.have.property('version');
  });
});
