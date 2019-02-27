const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware")

function defineRoutes(app) {
    app.post('/ride',authMiddleware.auth, rideController.createRide)
    app.post('/ride/update', rideController.updateRide)
    app.delete('/ride', authMiddleware.auth, rideController.deleteRide)
    app.get('/ride/search', rideController.search )
    app.get('/rides/stats/dest', rideController.ridesByDest)
}

module.exports = {
    defineRoutes
}