function convertRide(ride){
    if(!ride) {
        return {}
    } else {
        return {
            origin:ride.origin,
            dest:ride.dest,
            date:ride.date,
            token: ride.token
        }
    }
}

module.exports = convertRide;
