const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware")

function defineRoutes(app) {
    app.post('/user', userController.createUser)
    app.get('/user/validate', authMiddleware.auth, userController.getUser)
    app.post('/user/update', authMiddleware.auth, userController.updateUser)
    app.delete('/user', authMiddleware.auth, userController.deleteUser)
    app.get('/users', authMiddleware.auth, userController.getAllUsernames)
    app.get('/user/search', userController.search )
}

module.exports = {
    defineRoutes
}