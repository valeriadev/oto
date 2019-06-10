const db = require("../db");
const algo = require("./algo.service");

async function createRide({
  origin,
  dest,
  date,
  time,
  driver,
  id,
  numberOfSeatsAvailableInTheVehicle
}) {
  const ride = await new db.Ride({
    origin,
    dest,
    date,
    time,
    driver,
    id,
    numberOfSeatsAvailableInTheVehicle
  }).save();

  await algo.sendNewRide({
    driverID: driver,
    driveID: ride._id,
    startLocation: origin,
    endLocation: dest
  });

  return ride;
}

async function deleteRide(id) {
  return await db.Ride.findByIdAndDelete(id);
}

async function getById(id) {
  const ride = await db.Ride.findById(id);
  const rideForClient = ride.toJSON();
  const driver = await db.User.findOne({ uid: ride.driver });
  rideForClient.driver = driver.toJSON();
  return rideForClient;
}

async function updateRide({ uid }, { origin, dest, date, time, driver, id }) {
  const objToUpdate = getChangedObj({
    origin,
    dest,
    date,
    time,
    driver,
    id
  });
  return await db.Ride.findOneAndUpdate({ uid }, objToUpdate, {
    new: true
  });
}

async function joinRide(uid, _id) {
  driverID = uid;
  return await db.Ride.findOneAndUpdate(
    _id,
    { $push: { passengers: driverID } },
    {
      new: true
    }
  );
}

function getChangedObj(obj) {
  const newObj = {};
  Object.keys(obj).map(key => {
    if (obj[key]) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}
async function search({ origin, dest, date }) {
  //const from = new Regex("/^"+origin+"/");
  //const to = new Regex("/^"+dest+"/");
  //const newDate = new Regex("/^"+date+"/");

  // orParams = [];

  // if (origin) {
  //   orParams.push({ origin: origin });
  // }

  // if (dest) {
  //   orParams.push({ dest: dest });
  // }

  const response = [];

  const ridesString = await algo.findRide({
    startLocation: origin,
    endLocation: dest
  });

  const rides = JSON.parse(ridesString);
  const drivesIndex = {};
  for (let i = 0; i < rides.length; i++) {
    try {
      
      if (drivesIndex[rides[i].value.driveID]) {
        continue;
      } else {
        drivesIndex[rides[i].value.driveID] = true;
      }

      let ride = await db.Ride.findById(rides[i].value.driveID);
      const driver = await db.User.findOne({ uid: ride.driver });
      ride = ride.toObject();
      ride.driver = driver.toObject();

      response.push(ride);
    } catch (e) {
      console.error(`error: ${e.message}`);
    }
  }

  return response ? response : false;
}

async function aggregateByDest() {
  return await db.Ride.aggregate([
    {
      $group: { _id: "$dest", count: { $sum: 1 } }
    }
  ]);
}

async function mapReduceOrigin() {
  const o = {};

  o.map = function() {
    emit(this.origin, 1);
  };

  o.reduce = function(id, values) {
    return Array.sum(values);
  };

  return await db.Ride.mapReduce(o);
}

module.exports = {
  createRide,
  updateRide,
  deleteRide,
  search,
  aggregateByDest,
  mapReduceOrigin,
  getById,
  joinRide
};
