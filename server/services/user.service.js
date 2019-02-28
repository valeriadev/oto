const db = require("../db");
const mongoose = require("mongoose");
const config = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Regex = require("regex");


async function createUser({ firstname, lastname, email, password, phone, address }) {
    return await new db.User({
        _id: new mongoose.Types.ObjectId(),
        firstname,
        lastname,
        email,
        password,
        phone,
        address
    }).save();
}

async function validateToken(token) {

    return new Promise((resolve, reject) => {
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

async function deleteUser(id) {
    return await db.User.findByIdAndDelete(id);
}

async function updateUser(token, { firstname, lastname, email }) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.secret, async function (err, decoded) {
            if (err) {
                reject()
            } else {
                const objToUpdate = getChangedObj({ firstname, lastname, email });
                const user = await db.User.findByIdAndUpdate(decoded.id, objToUpdate, { new: true });
                resolve(user);
            }
        })
    })
}

function getChangedObj(obj) {
    const newObj = {}
    Object.keys(obj).map((key) => {
        if (obj[key]) {
            newObj[key] = obj[key]
        }
    })

    return newObj;
}

async function login(email, password) {
    const user = await db.User.findOne({ email: email });
    return (user && bcrypt.compareSync(password, user.password)) ? user : false;
}

async function search({ firstname, lastname, email }) {
    const user = await db.User.findOne({ firstname: firstname, email: email, lastname:lastname});
  
    return (user) ? user : false;
   
}

async function getAllUserNames() {
    return await db.User.find({}).select('firstname lastname');
}

module.exports = {
    createUser,
    validateToken,
    updateUser,
    deleteUser,
    login, 
    search,
    getAllUserNames
}