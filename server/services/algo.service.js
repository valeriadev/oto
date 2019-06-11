const request = require("request-promise-native");

async function sendNewRide({ driveID, driverID, startLocation, endLocation }) {
  try {
    await request.post("http://localhost:4567/otoServer/addRide", {
      body: JSON.stringify({ driveID, driverID, startLocation, endLocation }),
      headers: {
        "content-type": "application/json"
      }
    });
  } catch (e) {
    console.error(`add ride to algo message:${e.message} \n stack: ${e.stack}`);
  }
}

async function findRide({startLocation, endLocation}){
    try {
        return await request.post("http://localhost:4567/otoServer/addRideReq", {
          body: JSON.stringify({ startLocation, endLocation }),
          headers: {
            "content-type": "application/json"
          }
        });
      } catch (e) {
        console.error(`add ride to algo message:${e.message} \n stack: ${e.stack}`);
      } 
}

async function deleteRide({_id}){
  try {
      return await request.post("http://localhost:4567/otoServer/deleteRide", {
        body: JSON.stringify({ _id }),
        headers: {
          "content-type": "application/json"
        }
      });
    } catch (e) {
      console.error(`add ride to algo message:${e.message} \n stack: ${e.stack}`);
    } 
}


module.exports = {
  sendNewRide,
  findRide,
  deleteRide
};
