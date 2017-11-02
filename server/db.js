const mysql = require('mysql')

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fish'
});

// exports.connection.connect();

// exports.connection.end();
/*
mysql.server start
mysql -u root < schema.sql
mysql -u root
*/