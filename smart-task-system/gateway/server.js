const express = require('express');
const bodyParser = require('body-parser');

const taskService = require('../services/taskService');

// Start services
require('../services/schedulerService');
require('../services/workerService');

const app = express();
app.use(bodyParser.json());

// Routes
app.post('/task', taskService.createTask);

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});