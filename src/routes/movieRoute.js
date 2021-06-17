const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController')

router.get(
    '/movies',
    movieController.getMovie
);

router.get(
    '/movie/:id',
    movieController.getMovieId
);

router.get(
    '/movie',
    movieController.getMovieTitle
);

router.get(
    '/pageMovie',
    movieController.getMoviePage
);


router.get(
    '/find/movies',
    movieController.getMovieTitle
);

router.get(
    '/moviesWithGenre',
    movieController.getMovieWithGenre
);

router.get(
    '/moviesWithReviewAndUser',
    movieController.getMoviesWithReviewAndUser
);


module.exports = router