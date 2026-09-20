const express = require("express");
const app = express();

//middleware
app.use(express.json());

//route
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);


module.exports = app;

