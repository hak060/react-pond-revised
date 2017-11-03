const db = require('./db.js')
const mysql = require('mysql')

module.exports = {
  allFishes: {

    get: function (callback) {
      var sqlStringGetAll = `select * from fishes`;
      db.connection.query(sqlStringGetAll, function(err, rows) {
        callback(err, rows);
      });
    },

    post: function (fish, callback) {
      var sqlStringInsertFish = `insert into fishes (name, age, description, image) \
        values ("${fish.name}", ${fish.age}, "${fish.description}", "${fish.image}")`;
      db.connection.query(sqlStringInsertFish, function(err, rows) {
        callback(err, rows);
      })
    }
  },

  filterFishes: {
    post: function (keyward, callback) {
      // console.log('keyward =======', keyward)
      // var nameToFind = keyward.name;
      // var ageToFind = keyward.age;
      // console.log('findParaMeter ====== ', nameToFind, ageToFind);

      var sqlStringGetFiltered = 
        `select * from fishes where name = "${keyward.name}" and age = ${keyward.age}`;
      db.connection.query(sqlStringGetFiltered, function (err, rows) {
        callback(err, rows);
      });
    }
  }
}