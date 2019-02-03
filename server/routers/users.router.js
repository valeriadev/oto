const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware")

function defineRoutes(app) {
    app.post('/user', userController.createUser)
    app.get('/user/validate', authMiddleware.auth, userController.validateToken)
    app.post('/user/update', userController.updateUser)
    app.delete('/user', authMiddleware.auth, userController.deleteUser)
    app.post('/user/login', userController.login)
    app.get('/user/search', userController.search )
}

module.exports = {
    defineRoutes
}