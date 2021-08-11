const  bcrypt  = require('bcrypt');

module.exports = function cryptPassword(password) {
        bcrypt.genSalt(10)
            .then((salt => bcrypt.hash(password, salt)))
            .then(hash => hash);
}

module.exports = function comparePassword(password, hashPassword) {
        bcrypt.compare(password, hashPassword)
            .then(resp => resp)
}