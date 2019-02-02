const validator = require("email-validator");
const userService = require("../services/user.service");
const userViewModel = require("../viewmodel/user");


async function createUser(req, res) {
    console.log('1')
    const { email, password } = req.body;

    if (!(validateEmail(email) && validatePassword(password))) {
        res.status(400).json({ error: 'Request is not valid' });
    }

    try {
        const newUser = await userService.createUser(req.body);
        res.status(200).json({ user: userViewModel(newUser) });
    } catch (e) {
        console.error('Failed to create user: ' + e);
        res.status(500).json({error:'Can not create user'});
    }

}

function validateEmail(email) {
    return email && validator.validate(email);
}

function validatePassword(password) {
    return password && password.length >= 6;
}

module.exports = {
    createUser
}