const failedTasks = [];

module.exports = {
  add: (task) => {
    failedTasks.push(task);
    console.log("Moved to DLQ:", task.name);
  }
};