const eventBus = require('../../events/eventBus');

module.exports = (task) => {
  task.retries = (task.retries || 0) + 1;

  if (task.retries < 3) {
    console.log("Retrying:", task.name);
    eventBus.emit('taskCreated', task);
  } else {
    eventBus.emit('moveToDLQ', task);
  }
};

