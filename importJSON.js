const fishdata = require('./fishdata.json');
const mysql = require('mysql');
const db = require('./server/db.js');

fishdata.map(fish => {
  console.log('show ====', fish);
  var sqlString = `insert into fishes (name, age, description, image) \
    values ("${fish.name}", ${fish.age}, "${fish.description}", "${fish.image}")`;

  console.log('sqlString =======', sqlString);
  db.connection.query(sqlString, function (err, rows, fields) {
    console.log('err ========', err)
    console.log('inside of connection db ===== ', rows);
  });
});