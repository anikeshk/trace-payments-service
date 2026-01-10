const db = require('../db/connection');

async function getHealth(req, res) {
  try {
    const dbConnection = db.getConnection();
    const dbStatus = dbConnection ? 'connected' : 'disconnected';

    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'trace-payments-service',
      version: '1.0.0',
      database: dbStatus
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
}

module.exports = {
  getHealth
};
