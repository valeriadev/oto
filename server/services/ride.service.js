
const db = require("../db");
const mongoose = require("mongoose");
const config = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Regex = require("regex");

async function createRide({ origin ,dest ,date ,time, driver, id })
{
    return await new db.Ride({
        origin,
        dest,
        date,
        time,
        driver,
        id
    }).save();
}

async function deleteRide(id) {
    return await db.Ride.findByIdAndDelete(id);
}
//
async function updateRide (token, { origin ,dest ,date ,time, driver, id }) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.secret, async function (err, decoded) {
            if (err) {
                reject()
            } else {
                const objToUpdate = getChangedObj({ origin ,dest ,date ,time, driver, id });
                const ride = await db.Ride.findByIdAndUpdate(decoded.id, objToUpdate, { new: true });
                resolve(ride);
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
async function search({ origin, dest, date }) {

    const from = new Regex("/^"+origin+"/");
    const to = new Regex("/^"+dest+"/");
    const newDate = new Regex("/^"+date+"/");
    const ride = await db.User.find({ origin: from, dest: to, date: newDate });
  
    return (ride.driver)// ? ride : false;
   
}
module.exports = {
    createRide,
    updateRide,
    deleteRide,
    search
}