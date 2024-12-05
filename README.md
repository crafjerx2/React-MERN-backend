# Calendar Backend

## Description

This is the backend service for a calendar application, built with Node.js and Express. It handles user authentication, event management, and data storage using MongoDB.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd calendar-backend
npm install
```

## Development Mode

To run the application in development mode, use the following command

```bash
npm run dev
```

## Environment Variables

This project uses environment variables for configuration. Create a .env file in the root directory and add the following variables:

```bash
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

## Dependencies

- bcryptjs: To hash passwords.
- cors: To enable Cross-Origin Resource Sharing.
- dotenv: To load environment variables from a .env file.
- express: Web framework for Node.js.
- express-validator: To validate and sanitize request data.
- jsonwebtoken: To sign and verify JSON Web Tokens.
- moment: To manipulate and display dates and times.
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
