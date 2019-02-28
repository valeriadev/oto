const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require("../config");

const userSchema = new mongoose.Schema({
    firstname: 'string',
    lastname: 'string',
    phone: 'string',
    address: 'string',
    email: { type: 'string', required: true, lowercase: true },
    password: { type: 'string', required: true },
    token: 'string'
}, { timestamps: true });


userSchema.pre('save', function (next) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(saltRounds, function (err, salt) {

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                console.error('Failed to encrypt password: ' + err);
                next(err);
            } else {
                user.password = hash;
                next();
            }
        })
    })
})

userSchema.pre('save', function (next) {
    let user = this;

    if (!user.token) {
        jwt.sign({
            id: user._id
        }, config.secret, { expiresIn: '14d' }, function (err, token) {
            if (err) {
                next(err)
            } else {
                user.token = token;
                next();
            }
        });
    } else {
        next();
    }
})

const User = mongoose.model('User', userSchema);


module.exports = User;