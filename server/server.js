const express = require('express');
const parser = require('body-parser');
const path = require('path');
const routes = require('./router.js');
const morgan = require('morgan');
const db = require('./db.js');

const server = express();
// server.use(morgan('dev'));
server.use(parser.json());
server.use(parser.urlencoded({extended: true}));
server.use('/api', routes);
server.use('/', express.static(path.join(__dirname, 'client/src')));



// server.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   next();
// });



server.get('/compiled/bundle.js', function (req, res) {
  console.log('looking for bundle.js');
  console.log(path.join(__dirname, 'client/src/index.html'));
  res.sendFile(path.join(__dirname, 'client/compiled/bundle.js'));
});


server.get('/', function (req, res) {
  console.log('got GET request');
  res.send('Hello World!');
});


server.post('/', function (req, res) {
  console.log('got POST request',req.body);
  res.send(req.body);
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});