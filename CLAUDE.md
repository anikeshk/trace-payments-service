# Claude Code - trace-payments-service

This project was generated using Claude Code, Anthropic's official CLI tool for Claude.

## Project Overview

**trace-payments-service** is a demo Express.js microservice showcasing a typical payment processing service structure. This is a sample/demo project designed to demonstrate best practices in Node.js microservice architecture.

## Key Features

- **Express.js** REST API server
- **Mocha** test framework (v10.0.0)
- **Chai** assertion library for testing
- Clean folder structure following microservice patterns
- In-memory payment processing demo
- Health check endpoints
- Comprehensive test coverage

## Project Structure

```
trace-payments-service/
├── lib/                  # Core business logic and utilities
├── db/                   # Database connection, migrations, and seeds
├── tests/                # Mocha test suite
├── config/               # Configuration files (app, database)
├── middleware/           # Express middleware (logging, validation, errors)
├── routes/               # API route definitions
├── controllers/          # Request handlers and business logic coordination
├── models/               # Data models and schemas
├── app.js                # Express application setup
├── index.js              # Server entry point
└── CODEOWNERS            # Code ownership definitions
```

## Getting Started

### Installation

```bash
npm install
```

### Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

### Running Tests

```bash
npm test
```

All tests use Mocha v10.0.0 and should pass successfully.

## API Endpoints

### Health Check
- `GET /api/health` - Service health status

### Payments
- `GET /api/payments` - Get all payments
- `GET /api/payments/:id` - Get payment by ID
- `POST /api/payments` - Create new payment
- `PATCH /api/payments/:id/status` - Update payment status

### Root
- `GET /` - Service information

## Environment Variables

Copy `.env.example` to `.env` and configure:

```
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=trace_payments_dev
DB_USER=postgres
DB_PASSWORD=password
```

## Code Ownership

This project uses a `CODEOWNERS` file to define code ownership patterns:
- Tests are owned by @anikeshk
- Other directories follow team-based ownership patterns
- Configuration files require DevOps team review

See [CODEOWNERS](CODEOWNERS) for complete ownership details.

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js 4.x
- **Testing:** Mocha 10.0.0 + Chai
- **Development:** Nodemon
- **Environment:** dotenv

## Notes

This is a demo implementation with in-memory storage. In a production environment, you would:
- Connect to a real database (PostgreSQL, MySQL, MongoDB, etc.)
- Implement proper authentication and authorization
- Add rate limiting and security middleware
- Use a real payment gateway integration
- Implement proper logging and monitoring
- Add API documentation (Swagger/OpenAPI)

---

Generated with [Claude Code](https://claude.com/claude-code)
