const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/oto');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to mongodb')
});

module.exports = {
    User: require("./users.model"),
    Ride: require("./rides.model")
}