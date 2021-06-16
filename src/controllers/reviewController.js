const { review: userReview, users: userModel } = require('../../models')

const reviewController = {}


reviewController.getReviews = async (req, res) => {
    try {
        const review = await userReview.findAll({
            include: [userModel]
        });
        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: review
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};


module.exports = reviewController