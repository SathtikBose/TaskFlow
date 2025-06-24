require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middleware/errorHandler");
const v1Routes = require("./routes/v1");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./src/docs/swagger.yaml");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*", credentials: true } });

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate Limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// API Versioning
app.use("/api/v1", v1Routes);

// Swagger API Docs Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error Handling
app.use(errorHandler);

// Socket.io
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  // ...socket event handlers...
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, server, io };
