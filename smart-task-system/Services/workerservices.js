const eventBus = require('../events/eventBus');
const db = require('../db/mysql');

eventBus.on('processTask', (task) => {
  console.log("Processing:", task.name);

  db.query(
    'INSERT INTO logs (task_id, status) VALUES (?, ?)',
    [task._id, 'completed']
  );
});
