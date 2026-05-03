const Task = require('../models/taskModel');
const eventBus = require('../events/eventBus');

exports.createTask = async (req, res) => {
  const { name, priority } = req.body;

  const task = await Task.create({ name, priority });

  eventBus.emit('taskCreated', task);

  res.json(task);
};