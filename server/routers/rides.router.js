const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware")

function defineRoutes(app) {
    app.post('/ride',authMiddleware.auth, rideController.createRide)
    app.get('/ride/byId', authMiddleware.auth, rideController.getById)
    app.post('/ride/update', authMiddleware.auth, rideController.updateRide)
    app.delete('/ride', authMiddleware.auth, rideController.deleteRide)
    app.get('/ride/search', rideController.search )
    app.get('/rides/stats/dest', rideController.ridesByDest)
    app.get('/rides/stats/origin', rideController.ridesByOrigin)
    app.post('/ride/join', authMiddleware.auth, rideController.joinRide) 
    app.get('/ride/byUserId', authMiddleware.auth, rideController.findAllRidesByUserID)
    app.get('/ride/passenger', authMiddleware.auth, rideController.findAllPassengerRidesByUserID)
    app.delete('/ride/delete', authMiddleware.auth, rideController.deleteRide)
    /*
    {"rideid":""}
    */
}

module.exports = {
    defineRoutes
}