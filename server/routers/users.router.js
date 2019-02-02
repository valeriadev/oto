const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware")

function defineRoutes(app) {
    app.post('/user', userController.createUser)
    app.get('/user/validate', authMiddleware.auth, userController.validateToken)
}

module.exports = {
    defineRoutes
}