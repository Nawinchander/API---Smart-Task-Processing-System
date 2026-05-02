const PriorityQueue = require('../dsa/priorityQueue');
const eventBus = require('../events/eventBus');

const queue = new PriorityQueue();

// Listen to task creation
eventBus.on('taskCreated', (task) => {
  console.log("Task received in scheduler:", task.name);
  queue.enqueue(task);
});

// Process tasks
setInterval(() => {
  if (!queue.isEmpty()) {
    const task = queue.dequeue();
    eventBus.emit('processTask', task);
  }
}, 3000);