const router = require('express').Router()
const models = require('./models.js')
// const db = require('./db.js')

router.post('/fishPost', function (req, res) {
  console.log('got addFish request', req.body);
  models.allFishes.post(req.body, function(err, rows) {
    console.log('rows ========', rows);
    res.send(req.body);
  });
});

router.post('/fishFilter', function (req, res) {
  console.log('got filterFish request', req.body);
  res.send(req.body);
});

module.exports = router