const reviewService = require("../services/review.service");

async function createReview(req, res) {
    const reviewerId  = req.user.uid
    try {
        const review = await reviewService.createReview({
          reviewerId,
            rating: req.body.rating,
            review:req.body.review,
            driverId: req.body.driverId,
            rideId: req.body.rideId
        })
        res.status(200).json(review);
      } catch (e) {
        console.error("Failed to create review: " + e);
        res.status(500).json({ error: "Can not create review" });
      }

    
}


module.exports = {
  createReview
};
