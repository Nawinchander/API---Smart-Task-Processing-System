const express = require('express');
const router = express.Router();
const taskService = require('../../services/taskService');

router.post('/task', taskService.createTask);

module.exports = router;
