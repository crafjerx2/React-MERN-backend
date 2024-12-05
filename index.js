const express = require("express");
const { DBConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

// Create a server
const app = express();

// DB
DBConnection();

// CORS
app.use(cors());

// Static resources
app.use(express.static("public"));

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use("/api/auth", require("./routers/authRouter"));
app.use("/api/events", require("./routers/eventsRouter"));

// Listen on port 500
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
