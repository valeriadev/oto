const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: 'string',
    model: 'string',
}, { timestamps: true });




const Car = mongoose.model('Car', carSchema);


module.exports = Car;