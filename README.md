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

📁 /config/ (configuration files)

- **`config.js`** – Centralized configuration file that loads and manages:

  - Environment variables (from `.env`)
  - Database connection settings
  - API keys and third-party service credentials
  - Application-wide constants

   <br>

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

   <br>

📁 /modules/ test (Modular Structure)

This module follows the **modular monolithic** pattern, ensuring that all related functionalities for the `Test` feature are encapsulated within a single directory.  
It contains its own **model, controller, services, and routes**, maintaining a clean and scalable architecture.

#### 📄 **Files in the `test` Module**

- **`test.model.js`**

  - Defines the Mongoose schema for `Test`.
  - Manages the structure and validation of test-related data.

- **`test.controller.js`**

  - Handles HTTP requests and responses.
  - Calls the service layer for business logic execution.

- **`test.services.js`**

  - Implements core business logic for the `Test` module.
  - Interacts with the `test.model.js` to process data operations.

- **`test.routes.js`**

  - Defines API endpoints for the `Test` module.
  - Connects routes with the corresponding controller functions.

  <br>

📁 /utils/ (Utility Functions)

- **`catchAsync.js`** – Asynchronous error handler middleware

  - Wraps asynchronous route handlers and middleware to catch errors automatically.
  - Uses `Promise.resolve()` to handle both synchronous and asynchronous errors.
  - Passes any caught errors to Express's built-in error-handling middleware via `next()`.
  - Eliminates the need for repetitive `try...catch` blocks in async functions.

- **`sendResponse.js`** – Standardized response handler

  - Formats and sends JSON responses in a consistent structure.
  - Takes the `res` (response object) and `data` (response details) as parameters.
  - Sets the HTTP status code using `data.statusCode`.
  - Returns a JSON object containing:

    - **`success`** – Boolean indicating the operation's success or failure.
    - **`message`** – Descriptive message about the response.
    - **`meta`** – (Optional) Additional metadata for paginated responses or extra details.
    - **`data`** – The actual response payload.

- **`jwtHelper.js`** – JWT (JSON Web Token) utility functions

  - **Handles token generation and verification** for authentication and authorization.
  - Uses the secret key from `process.env.JWT_SECRET_KEY`.

  #### 🔹 `generateToken(_id, role)`

  - Generates a JWT for a user based on their `_id` and `role`.
  - Uses `jwt.sign()` to create a token with an expiration time of **1 hour**.
  - Returns the generated token.

  #### 🔹 `verifyToken(token)`

  - Decodes and verifies a JWT using `jwt.verify()`.
  - If the token is **valid**, it returns the decoded payload (containing `_id` and `role`).
  - If the token is **invalid** or expired, it returns `null`.

📄 server.js (Entry Point)

**`server.js`** – Application entry point

- Initializes the **MERN Backend Template** by connecting to the database and starting the server.

#### 🔹 `main()` – The main function

- **Establishes a database connection** using `mongoose.connect(config.database_url)`.
- If successful, it **starts the Express server** on the specified port.
- Logs a message indicating that the server is running.
- If an error occurs during the connection process, it logs the error.

#### 🔹 `server` – Express server instance

- Created using `app.listen(config.port, callback)`.
- Ensures the server starts only after a successful database connection.

#### 📜 **Execution Flow**

1. The `main()` function runs immediately when the file is executed.
2. The database connection is established.
3. If the connection succeeds, the Express server starts listening on the configured port.
4. If there’s an error (e.g., database connection failure), it is logged in the console.
