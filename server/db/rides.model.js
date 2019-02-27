const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require("../config");

const rideSchema = new mongoose.Schema({
    origin: 'string',
    dest: 'string',
    date: 'string',
    time: 'string',
    driver: {type:mongoose.Types.ObjectId, ref:'User'},
    id: 'string',
    token: 'string'
}, { timestamps: true });




const Ride = mongoose.model('Ride', rideSchema);


module.exports = Ride;