const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require("../config");

const rideSchema = new mongoose.Schema({
    origin: { type: 'string', lowercase: true },
    dest:  { type: 'string', lowercase: true },
    date: 'date',
    time: 'string',
    driver: {type:mongoose.Types.ObjectId, ref:"User", path:'_id'},
    token: 'string'
}, { timestamps: true });



const Ride = mongoose.model('Ride', rideSchema);


module.exports = Ride;