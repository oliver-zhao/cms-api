const express = require('express');
const router = express.Router();
const  fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let userFile = fs.readFileSync('db/users.json');
  let users = JSON.parse(userFile);
  res.json(users);
});

module.exports = router;
