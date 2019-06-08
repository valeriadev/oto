const db = require("../db");

async function createRide({ origin, dest, date, time, driver, id }) {
  return await new db.Ride({
    origin,
    dest,
    date,
    time,
    driver,
    id
  }).save();
}

async function deleteRide(id) {
  return await db.Ride.findByIdAndDelete(id);
}

async function getById(id) {
  const ride = await db.Ride.findById(id);
  const rideForClient = ride.toJSON();
  const driver = await db.User.findOne({uid:ride.driver});
  rideForClient.driver = driver.toJSON()
  return rideForClient;
}


async function updateRide(uid, { origin, dest, date, time, driver, id }) {
        const objToUpdate = getChangedObj({
          origin,
          dest,
          date,
          time,
          driver,
          id
        });
        return await db.Ride.findOneAndUpdate({uid}, objToUpdate, {
          new: true
        });
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

  orParams = [];

  if (origin) {
    orParams.push({ origin: origin });
  }

  if (dest) {
    orParams.push({ dest: dest });
  }

  if (date) {
    orParams.push({ date: date });
  }

  let ride;

  if (orParams.length > 0) {
    ride = await db.Ride.find({ $or: orParams });
  } else {
    ride = await db.Ride.find();
  }

  for (let i = 0; i < ride.length; i++) {
     ride[i].driver = await db.User.findOne({uid:ride[i].driver})
  }

  return ride ? ride : false;
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
  mapReduceOrigin,getById
};
