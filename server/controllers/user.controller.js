const validator = require("email-validator");
const userService = require("../services/user.service");
const userViewModel = require("../viewmodel/user");

async function createUser(req, res) {
    const { email, password } = req.body;

    if (!(validateEmail(email) && validatePassword(password))) {
        res.status(400).json({ error: 'Request is not valid' });
    }

    try {
        const newUser = await userService.createUser(req.body);
        res.status(200).json({ user: userViewModel(newUser) });
    } catch (e) {
        console.error('Failed to create user: ' + e);
        res.status(500).json({ error: 'Can not create user' });
    }

}

async function updateUser(req, res){
    const token = req.headers['x-oto-token'];
    try{
        const userUpdate = await userService.updateUser(token, req.body);
        res.status(200).json({user: userViewModel(userUpdate)});
    }catch(e){
        console.error('Failed to update user: '+ e);
        res.status(500).json({ error: 'Can not update user' });
    }
}

async function deleteUser(req,res){
    try{
         const userDelete = await userService.deleteUser(req.user._id);
         res.status(200).json({user: userViewModel(userDelete)});
    }catch(e){
        console.error('Failed to delete user: '+ e);
        res.status(500).json({ error: 'Can not delete user'});
    }
}

function validateEmail(email) {
    return email && validator.validate(email);
}

function validatePassword(password) {
    return password && password.length >= 6;
}

async function validateToken(req, res) {
   
   res.status(200).json({user:userViewModel(req.user)});
}

 async function login(req,res){
    try{
    const userLogin = await userService.login(req.body.email, req.body.password);
    res.status(200).json({ user: userViewModel(userLogin)});
    }catch(e){
        console.error('Failed to login: '+ e);
        res.status(500).json({ error: 'Can not login'}); 
    }
}
module.exports = {
    createUser,
    validateToken,
    updateUser,
    deleteUser,
    login

}