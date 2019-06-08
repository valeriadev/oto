const db = require("../db");


async function createReview({ rating, review, driverId, rideId, reviewerId}) {
    return await new db.Review({
        rating,
        review,
        ride: rideId,
        driver: driverId,
        reviewer: reviewerId
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
