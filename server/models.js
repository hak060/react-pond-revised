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
    get: function (callback) {

    }
  }
}