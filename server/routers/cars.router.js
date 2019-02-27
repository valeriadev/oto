const carService = require("../services/car.service");

function defineRoutes(app) {
    app.get('/car/search', (req, res) =>{
        if(!req.query.text) {
            res.status(400).json({error:'You must send text in query string'})
        }
       res.json(carService.search(req.query.text.toLowerCase()));
    })
}

module.exports = {
    defineRoutes
}