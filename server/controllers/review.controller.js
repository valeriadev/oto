const reviewService = require("../services/review.service");
const reviewViewModel = require("../viewmodel/review");
const querystring = require("querystring");
const url = require("url");

async function createReview(req, res) {
    const reviewerId  = req.user._id
    try {
        const userUpdate = await reviewService.createReview({
            reviewerId,
            rating: req.body.rating,
        })
        res.status(200).json({ user: userViewModel(userUpdate) });
      } catch (e) {
        console.error("Failed to update user: " + e);
        res.status(500).json({ error: "Can not create review" });
      }

    
}

async function updateUser(req, res) {
  const token = req.headers["x-oto-token"];
  try {
    const userUpdate = await userService.updateUser(token, req.body);
    res.status(200).json({ user: userViewModel(userUpdate) });
  } catch (e) {
    console.error("Failed to update user: " + e);
    res.status(500).json({ error: "Can not update user" });
  }
}


module.exports = {
  createReview
};
