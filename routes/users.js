const express = require('express');
const router = express.Router();
const  fs = require('fs');

router.use(express.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  //const firstName = req.params.firstName;
  //console.log("firstName="+firstName);
  let userFile = fs.readFileSync('db/users.json');
  let users = JSON.parse(userFile);
  res.json(users);
});

router.post('/', function(req, res, next) {
   /* TODO 
     1. get user information from the request body.
     2. add user json data to db/users.json 
     ( 
       how to read and write the file
       how to convert the json object to string , and string to object
      )
   */
  //const firstName = req.query.firstName;
  //const lastName = req.query.lastName;
  //const email = req.body.email;
  //const password = req.body.password;
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  //console.log(email);
  res.xml({message:"Create user successfully"});
});

router.delete('/:email', function(req, res, next){
    const email = req.params.email;
    console.log(email);
    res.status(400).send({message:"Delete user failed"});
});

module.exports = router;
