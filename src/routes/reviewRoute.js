const express = require('express')

const router = express.Router()

const reviewController = require('../controllers/reviewController')

// Route Character
router.get(
    '/reviews', reviewController.getReviews
    )



module.exports = router