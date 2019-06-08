const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    review: String,
    rating: Number,
    ride: { type: Schema.Types.ObjectId, ref: 'Ride' },
    reviewer: 'string',
    driver: 'string'

});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;