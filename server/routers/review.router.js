const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

function defineRoutes(app) {
    app.post('/user/ride/createRideSummary', authMiddleware.auth, userController.createUser)
    app.get('/user/ride/searchRideSummary', userController.search )
}

module.exports = {
    defineRoutes
}