import * as bcrypt from 'bcrypt';

export const encrypt = {

    cryptPassword: (password) =>
        bcrypt.genSalt(10)
            .then((salt => bcrypt.hash(password, salt)))
            .then(hash => hash),

    comparePassword: (password, hashPassword) =>
        bcrypt.compare(password, hashPassword)
            .then(resp => resp)

}