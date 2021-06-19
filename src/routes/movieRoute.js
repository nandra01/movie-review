const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController')

router.get(
    '/movies',
    movieController.getMoviePage,
    movieController.getMovie
    
);

router.get(
    '/movieId/:id',
    movieController.getMovieId
);

// router.get(
//     '/pageMovie',
//     movieController.getMoviePage
// );

router.get(
    '/find/movies',
    movieController.getMovieTitle
);

router.get(
    '/moviesWithGenre',
    movieController.getMoviePage,
    movieController.getMovieWithGenre
);

router.get(
    '/moviesWithReviewAndUser',
    movieController.getMoviesWithReviewAndUser
);


module.exports = router