function convertUser(user){
    if(!user) {
        return {}
    } else {
        return {
            firstname:user.firstname,
            lastname:user.lastname,
            phone:user.phone,
            address:user.address,
            email:user.email,
            token: user.token
        }
    }
}

module.exports = convertUser;
