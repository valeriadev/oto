function convertReview(review){
    if(!review) {
        return {}
    } else {
        return {
            rating : review.rating,
            notes : review.notes,
            user : review.user,
            ride : review.ride
        }
    }
}

module.exports = convertReview;