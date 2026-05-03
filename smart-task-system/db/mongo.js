const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/tasks');

module.exports = mongoose;

