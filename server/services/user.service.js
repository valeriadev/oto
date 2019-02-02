const db = require("../db");

async function createUser({firstname, lastname, email, password}) {
    return await new db.User({
        firstname,
        lastname,
        email,
        password
    }).save();
}

module.exports = {
    createUser
}