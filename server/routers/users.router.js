const userController = require("../controllers/user.controller");

function defineRoutes(app) {
    app.post('/user', userController.createUser)
}

module.exports = {
    defineRoutes
}