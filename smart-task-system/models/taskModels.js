const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  priority: Number,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model('Task', taskSchema);
