const eventBus = require('../events/eventBus');
const dlq = require('./dlqService');

eventBus.on('processTask', (task) => {
  try {
    if (Math.random() < 0.5) throw new Error("Random failure");

    console.log("Task processed:", task.name);

  } catch (err) {
    console.log("Task failed:", task.name);
    eventBus.emit('taskFailed', task);
  }
});

