function convertUser(user){
    if(!user) {
        return {}
    } else {
        return {
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            token: user.token
        }
    }
}

module.exports = convertUser;