const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware")

function defineRoutes(app) {
    app.post('/ride', rideController.createRide)
    app.post('/ride/update', rideController.updateRide)
    app.delete('/ride', authMiddleware.auth, rideController.deleteRide)
    app.get('/ride/search', rideController.search )
}

module.exports = {
    defineRoutes
}