function convertRide(ride){
    if(!ride) {
        return {}
    } else {
        return {
            origin:ride.origin,
            dest:ride.dest,
            data:ride.date,
            token: ride.token
        }
    }
}

module.exports = convertRide;
