const db = require("../db");
const mongoose = require("mongoose");


async function createReview({ rating, notes, driverId, rideId, reviewerId}) {
    return await new db.Review({
        rating,
        notes,
        ride:rideId,
        driver: driverId,
        review:reviewerId
    }).save();
}

async function searchReview({ id }) {
    const review = await db.Review.findById(id);
  
    return (review) ? review : false;
   
}
module.exports = {
    createReview,
    searchReview
}