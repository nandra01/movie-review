const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController')

router.get(
    '/movies',
    movieController.getMovie
);

router.get(
    '/moviesWithGenre',
    movieController.getMovieWithGenre
);


module.exports = router