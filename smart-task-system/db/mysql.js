const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'task_logs'
});

connection.connect();

module.exports = connection;

