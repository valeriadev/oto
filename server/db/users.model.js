const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    uid: {type:'string', required:true, unique:true},
    fullname: 'string',
    birthday: 'string',
    lat: 'string',
    long:'string',
    email: { type: 'string', required: true, lowercase: true },
    password: { type: 'string', required: true, select: false  },
    gender: 'string',
    brand: 'string',
    model: 'string',
    color: 'string',
    lat: 'string',
    license: 'string',
    phone: 'string',
    terms: 'boolean',
}, { timestamps: true });



const User = mongoose.model('User', userSchema);


module.exports = User;