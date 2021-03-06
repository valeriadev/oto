const rideService = require("../services/ride.service");
const rideViewModel = require("../viewmodel/ride");

async function createRide(req, res) {

  try {
    req.body.driver = req.user.uid;
    const newRide = await rideService.createRide(req.body);
    res.status(200).json({ ride: rideViewModel(newRide) });
  } catch (e) {
    console.error("Failed to create ride: " + e.stack);
    res.status(500).json({ error: "Cannot create ride" });
  }
}

async function updateRide(req, res) {
  try {
    const rideUpdate = await rideService.updateRide(req.user.uid, req.body);
    res.status(200).json({ ride: rideViewModel(rideUpdate) });
  } catch (e) {
    console.error("Failed to update ride: " + e);
    res.status(500).json({ error: "Can not update ride" });
  }
}

async function joinRide(req, res){
  try {
    passengerId=req.user.uid;
    const rideJoin = await rideService.joinRide(passengerId, req.body);
    res.status(200).json({ ride: rideViewModel(rideJoin) });
  } catch (e) {
    console.error("Failed to join ride: " + e);
    res.status(500).json({ error: "Can not join ride" });
  }
}

async function findAllRidesByUserID(req, res){
  try {
    const uid=req.user.uid;
    const rides = await rideService.findAllRidesByUserID(uid);
    res.status(200).json({ rides });
  } catch (e) {
    console.error("Failed to findAllRidesByUserID: " + e);
    res.status(500).json({ error: "Can not findAllRidesByUserID" });
  }
}

async function findAllPassengerRidesByUserID(req, res){
  try {
    const uid=req.user.uid;
    const rides = await rideService.findAllPassengerRidesByUserID(uid);
    res.status(200).json({ rides });
  } catch (e) {
    console.error("Failed to findAllRidesByUserID: " + e);
    res.status(500).json({ error: "Can not findAllRidesByUserID" });
  }
}

async function deleteRide(req, res) {
  try {
    const rideDelete = await rideService.deleteRide(req.query.id);
    res.status(200).json({ ride: rideViewModel(rideDelete) });
  } catch (e) {
    console.error("Failed to delete ride: " + e);
    res.status(500).json({ error: "Can not delete ride" });
  }
}

async function getById(req, res) {
  try {
    const ride = await rideService.getById(req.query.id);
    res.status(200).json(ride);
  } catch (e) {
    console.error("Failed to get ride: " + e);
    res.status(500).json({ error: "Can not get ride" });
  }
}

async function search(req, res) {
  try {
    const query = req.query;
    const rideSearch = await rideService.search(query);
    res.status(200).json(rideSearch);
  } catch (e) {
    console.error("Failed to search: " + e);
    res.status(500).json({ error: "Can not search" });
  }
}

async function ridesByDest(req,res) {
    try{
        res.json(await rideService.aggregateByDest())
    } catch(e){
        console.error(e);
        res.sendStatus(500);
    }
}

async function ridesByOrigin(req,res) {
  try{
      const data = await rideService.mapReduceOrigin();

      res.json(data.results)
  } catch(e){
      console.error(e);
      res.sendStatus(500);
  }
}

module.exports = {
  createRide,
  updateRide,
  deleteRide,
  search,
  ridesByDest,ridesByOrigin,getById,
  joinRide,
  findAllRidesByUserID,
  findAllPassengerRidesByUserID
};
