const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://EilonV3:eilon@cluster0-azotk.mongodb.net/test?retryWrites=true');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to mongodb')
});

module.exports = {
    User: require("./users.model"),
    Ride: require("./rides.model")
}