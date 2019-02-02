const db = require("../db");
const mongoose = require("mongoose");
const config = require("../config");
const jwt = require("jsonwebtoken");

async function createUser({ firstname, lastname, email, password }) {
    return await new db.User({
        firstname,
        lastname,
        email,
        password
    }).save();
}

async function validateToken(token) {

    return new Promise((resolve, reject)=>{
        jwt.verify(token, config.secret, async function (err, decoded) {
            if (err) {
                reject()
            } else {
                const user = await db.User.findById(decoded.id);
                resolve(user);
            }
        })
    })


}

module.exports = {
    createUser,
    validateToken
}