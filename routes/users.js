const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function (req, res, next) {
  const firstName = req.params.firstName;
  console.log("firstName=" + firstName);
  let userFile = fs.readFileSync('db/users.json');
  let users = JSON.parse(userFile);
  res.json(users);
});

 router.post('/', function (req, res, next) {
  /* TODO 
    1. get user information from the request body.
    2. add user json data to db/users.json 
    ( 
      how to read and write the file
      how to covert the json object to string , and string to object
     )
  */
  //version 1 , basic function done.
  //upgrade version 2.
  // how to improve the program ,make it better or security?

  // Get the user list from json file
  let userFile = fs.readFileSync('db/users.json');
  let users = JSON.parse(userFile);
  //build the user object, set the properties value
  const user = {};
  //1. validate the input
  // 1.1 the object has 4 properties.
  // 1.2 make sure they are not empty.

  // if (Object.keys(req.body).length !== 4) 
  // {
  //   return res.status(400).send({message:"validate input fail"});
  // }

  // for (let i = 0 ; i < Object.keys(req.body).length ; i++) {
  //   if (req.body[Object.keys(req.body)[i]] === undefined || req.body[Object.keys(req.body)[i]] ==='') {
  //     return res.status(400).send({message:"validate input fail : "+Object.keys(req.body)[i] +" not allow null"});
  //   }
  // }

  if (!req.body.firstName) {
    return res.status(400).send({ message: "validate input fail : firstName not allow empty" });
  }

  user.firstName = req.body.firstName;
  user['lastName'] = req.body.lastName;
  user.email = req.body.email;
  //2. make the password safe.
 bcrypt.genSalt(10)
    .then((salt => bcrypt.hash(req.body.password, salt)))
    .then(hash => {
      console.log (hash);
      user.password = hash;

      //push the user to the user list
      users.push(user);
      //convert the object to string
      const userString = JSON.stringify(users);
      console.log(userString);
      //save the user list string to the json file
      fs.writeFileSync('db/users.json', userString);
      return res.json({ message: "Create user successfully" });
    });
 
});

router.delete('/:email', function (req, res, next) {
  //TODO
  //1. get the user list from JSON file
  //2. search user.email if in the user list (* how to use array in js)
  //3. remove the element of this email in user list (* how to remove element in array)
  //4. response success or fail
  let userFile = fs.readFileSync('db/users.json');
  let users = JSON.parse(userFile);
  const email = req.params.email;
  users.findByIdAndDelete(email)
  /*  .then(result => {
      res.json({ redirect: '/:email'})
    })
    .catch(err => {
      console.log(err);
    })
*/
  //const email = req.params.email;
  //console.log(email); 
  res.status(400).send({ message: "Delete user failed" });
});

module.exports = router;
