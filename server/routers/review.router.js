const reviewController = require("../controllers/review.controller");
const authMiddleware = require("../middlewares/auth.middleware");

function defineRoutes(app) {
    app.post('/review/ride', authMiddleware.auth, reviewController.createReview)
    // app.get('/user/ride/searchRideSummary', userController.search )
}

module.exports = {
    defineRoutes
}