var express = require('express');
var router = express.Router();

router.get('/version', function(req, res, next) {
  res.json({'version' : 'v1.0.3'});
});

module.exports = router;
