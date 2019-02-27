const db = require("../db");
const AhoCorasick = require("ahocorasick");

let algoDatabase;

async function loadAllCars() {
  const allCars = await db.Car.find({});
  const keywords = [];

  const makes = {};

  for (let i = 0; i < allCars.length; i++) {

    if (!makes[allCars[i].make]) {
      keywords.push(allCars[i].make.toLowerCase());
      makes[allCars[i].make] = true;
    }
    keywords.push(allCars[i].model.toLowerCase());
  }

  algoDatabase = new AhoCorasick(keywords);
}

function search(text) {
    if(!algoDatabase) {
        return 'Car db is not ready yet'
    }
  return algoDatabase.search(text);
}

async function isCarsLoaded() { 
  const count = await db.Car.count({});
  return count > 0;
}



module.exports = {
    search,
    loadAllCars,
    isCarsLoaded

}
