const express = require("express");
const app = express();

//middleware
app.use(express.json());

const logger = require("./middleware/logger");
app.use(logger);


//route
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);


module.exports = app;

