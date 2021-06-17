const express = require('express')

const router = express.Router()

const reviewController = require('../controllers/reviewController')
const tokenMiddleware = require('../middleware/tokenMiddleware');

// Route Character
router.get(
    '/reviews', reviewController.getReviews
    )
router.post(
    '/create/review', 
    tokenMiddleware.verifyToken, 
    reviewController.createReview
)

module.exports = router