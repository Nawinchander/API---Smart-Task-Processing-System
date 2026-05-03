require('dotenv').config();
const express = require('express');

require('../db/mongo');
require('../db/mysql');

require('../services/schedulerService');
require('../services/workerService');

const rateLimiter = require('./middleware/rateLimiter');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

app.use(rateLimiter);
app.use('/api', taskRoutes);

app.listen(3000, () => console.log("Gateway running"));

