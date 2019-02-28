const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware")

function defineRoutes(app) {
    app.post('/ride',authMiddleware.auth, rideController.createRide)
    app.get('/ride/byId', authMiddleware.auth, rideController.getById)
    app.post('/ride/update', rideController.updateRide)
    app.delete('/ride', authMiddleware.auth, rideController.deleteRide)
    app.get('/ride/search', rideController.search )
    app.get('/rides/stats/dest', rideController.ridesByDest)
    app.get('/rides/stats/origin', rideController.ridesByOrigin)
}

module.exports = {
    defineRoutes
}