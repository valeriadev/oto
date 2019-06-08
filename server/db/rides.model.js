const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    origin: { type: 'string', lowercase: true },
    dest:  { type: 'string', lowercase: true },
    date: 'date',
    time: 'string',
    driver:'string',
    token: 'string'
}, { timestamps: true });



const Ride = mongoose.model('Ride', rideSchema);


module.exports = Ride;