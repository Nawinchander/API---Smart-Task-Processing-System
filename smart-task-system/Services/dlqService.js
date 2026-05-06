/// eventBus.emit('taskFailed', task);

const failedTasks = [];

module.exports = {
  addToDLQ: (task) => {
    failedTasks.push(task);
    console.log("Moved to DLQ:", task.name);
  },

  getDLQ: () => failedTasks
};




