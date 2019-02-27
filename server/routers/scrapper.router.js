
function defineRoutes(app) {
    app.get('/scrap',require("../scrapper").run)
}

module.exports = {
    defineRoutes
}