const router = require('express').Router()

router.post('/fishPost', function (req, res) {
  console.log('got addFish request', req.body);
  res.send(req.body);
});

router.post('/fishFilter', function (req, res) {
  console.log('got filterFish request', req.body);
  res.send(req.body);
});

module.exports = router