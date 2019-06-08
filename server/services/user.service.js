const db = require("../db");
const mongoose = require("mongoose");
const config = require("../config");
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

async function extendUser(user){
    return await new db.User(user).save();
}

async function getUserByUid(uid) {
    return await db.User.findOne({uid});
}

async function deleteUser(uid) {
    return await db.User.findOneAndDelete({uid});
}

async function updateUser(uid, { fullname, email }) {
                const objToUpdate = getChangedObj({ fullname, email });
                const user = await db.User.findOneAndUpdate({uid}, objToUpdate, { new: true });
                return user;
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



async function search({ fullname, email }) {
    const query = {};

    if(fullname) {
        query['fullname'] = fullname
    }


    if(email) {
        query['email'] = email
    }
    
    const user = await db.User.findOne(query);
  
    return (user) ? user : false;
   
}

async function getAllUserNames() {
    return await db.User.find({}).select('firstname lastname');
}

module.exports = {
    createUser,
    updateUser,
    getUserByUid,
    deleteUser,
    search,
    getAllUserNames,
    extendUser
}