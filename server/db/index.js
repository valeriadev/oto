const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:27017/oto");
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
