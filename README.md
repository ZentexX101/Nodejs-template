# MERN Backend Template

## Overview

This backend template provides a robust foundation for building secure and scalable Node.js applications using Express and MongoDB. It includes authentication, database integration, email handling, and payment processing, making it ideal for SaaS applications, e-commerce platforms, and other web services.

## Features

- ✅ **Authentication** (JWT)
- ✅ **Database** (MongoDB)
- ✅ **ORM/ODM** (Mongoose)
- ✅ **Email Services** (Nodemailer)
- ✅ **Payment Processing** (Stripe)
- ✅ **API Standardization** (Http status codes)

## Technologies Used

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Node.js framework
- [MongoDB & Mongoose](https://mongoosejs.com/) - NoSQL database with an ORM for efficient data modeling and management.
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing and salting
- [JWT](https://jwt.io/) - Secure authentication and authorization for user management.
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables
- [http status codes](https://www.npmjs.com/package/http-status-codes) - Standardized response status codes for API responses.
- [Nodemailer](https://nodemailer.com/) - Email service for notifications, verifications, and password resets.
- [CORS](https://www.npmjs.com/package/cors) - Middleware to manage cross-origin resource sharing.

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/sajid1545/FoundIt-server.git
```

#### Go to the project directory

```bash
cd .\MERN-Backend-Template\
```

### 2. Install the dependencies

```bash
npm install
```

### 3. Rename the file named `.env.example` to `.env` and then Add yours environment variables

### 4. Start the server

```bash
npm start
```

<br>

## 📁 Folder Structure

```plaintext
/src
│-- config/          # Application configuration files (environment variables, DB settings)
│-- middlewares/     # Express middlewares (Authentication, Logging, Error handling)
│-- modules/ # Feature-based modules (Encapsulated routes, controllers, services, and models)
│ ├── test/ # Example module
│ │ ├── test.model.js # Mongoose schema for Test
│ │ ├── test.controller.js # Handles HTTP requests & responses
│ │ ├── test.services.js # Business logic for Test
│ │ ├── test.routes.js # API endpoints for Blog
│-- utils/           # Helper functions (Validation, Formatting, Error handlers)
│-- server.js # Entry point (Initializes server)
│-- package.json # Dependencies & scripts
│-- .env # Environment variables

```

📁 /config/

- **`config.js`** – Centralized configuration file that loads and manages:
  - Environment variables (from `.env`)
  - Database connection settings
  - API keys and third-party service credentials
  - Application-wide constants

📁 /middlewares/ (Middleware Functions)

- **`errorHandler.js`** – Global error handler middleware

  - Catches and formats errors with a standard JSON response
  - Includes error details (description, code, and message)
  - Logs errors to the console with a timestamp

- **`authMiddleware.js`** – Authentication middleware

  - Handles authentication and authorization of incoming requests.
  - Verifies the presence and validity of a JWT (JSON Web Token) in the request headers.
  - Responds with an unauthorized error if the token is absent or invalid.
  - Checks the user's role against the required roles for the route.
  - Denies access if the user's role is not permitted.
  - Attaches the decoded user information to the request object if the token is valid.
  - Allows the request to proceed when authentication and authorization checks pass.

- **`notFound.js`** – Not Found middleware

  - Handles requests that don't match any defined routes.
  - Returns a 404 status code with a JSON response containing an error message.
  - The error message includes the requested path and the HTTP method used.
