const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect("mongodb+srv://dbUserValeria:AaValeria123!@cluster0-i5ugy.mongodb.net/test?retryWrites=true&poolSize=1");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to mongodb");
});

module.exports = {
  User: require("./users.model"),
  Car: require("./cars.model"),
  Ride: require("./rides.model"),
  Review: require("./reviews.model")
};
