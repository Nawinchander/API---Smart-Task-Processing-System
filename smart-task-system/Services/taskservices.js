const eventBus = require('../events/eventBus');

let tasks = [];

exports.createTask = (req, res) => {
  const { name, priority } = req.body;

  const task = {
    id: Date.now(),
    name,
    priority
  };

  tasks.push(task);

  // Emit event
  eventBus.emit('taskCreated', task);

  res.json({ message: "Task Created", task });
};

