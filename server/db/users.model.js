const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    firstname: 'string',
    lastname: 'string',
    email: { type: 'string', required: true, unique: true, lowercase: true },
    password: { type: 'string', required: true }
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

const User = mongoose.model('User', userSchema);


module.exports = User;