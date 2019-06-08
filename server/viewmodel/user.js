function convertUser(user){
    if(!user) {
        return {}
    } else {
        return {
            fullname:user.fullname,
            phone:user.phone,
            address:user.address,
            email:user.email,
            token: user.token
        }
    }
}

module.exports = convertUser;
