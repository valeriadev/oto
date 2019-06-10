function convertRide(ride){
    if(!ride) {
        return {}
    } else {
        return {
            origin:ride.origin,
            dest:ride.dest,
            date:ride.date,
            passengers: ride.passengers,
            numberOfSeatsAvailableInTheVehicle:ride.numberOfSeatsAvailableInTheVehicle
        }
    }
}

module.exports = convertRide;
