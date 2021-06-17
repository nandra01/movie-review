const {
    movies: userMovie, 
    movie_genre: movieGenre,
    char: userChar,
    review: userReview,
    users: users,
    genre: genreName,
} = require('../../models')

const Sequelize = require('sequelize');
const Op = Sequelize.Op

const movieController = {}

/**
 * Ger all movie
 */
movieController.getMovie = async (req, res) => {
    try {
        const movies = await userMovie.findAll({
            include: [{ model: userGenre },{ model: userChar}, {model: userReview, include: [users]}]
        });

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data Movie',
            data: {
                movies
            }
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

/**
* Get movie by genre
 */
movieController.getMovieWithGenre = async (req, res) => {
    try {
        const movies = await userMovie.findAll({
            include: [ {model: movieGenre, as: 'MovieGenre', include: [{ model: genreName, as: 'Genre', properties: [ 'genre_name' ] }] }],
            where: { '$MovieGenre.genre_id$': req.body.movie_id }
        })

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get Movie by Genre',
            data: movies
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

/**
 * Get movie with pagination
 */
movieController.getMoviePage = async (req, res) => {
    try {
        const { page, size } = req.query
        const movies = await userMovie.findAll({
            limit: size,
            offset: page * size,
        });
        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data movie',
            data: movies
        };

        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

/**
 * Get movie with review by users
 */
movieController.getMoviesWithReviewAndUser = async (req, res) => {
    try {
        const movies = await userMovie.findAll({
            include: [{ model: userReview, include: [{ model: users } ] }]
        });

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data movie with review by users',
            data: movies
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

/**
 * Get movie by MovieId
 */
movieController.getMovieId = async (req, res) => {
    try {
        const idMovie = req.params.id
        const movies = await userMovie.findByPk(idMovie, {
            include: [userReview]
        })

        if (movies) {
            const resPayLoad = {
                statusCode: 200,
                statusText: 'Success',
                message: `Get Movie by id ${req.params.id} Success`,
                data: movies
            };
            res.json(resPayLoad)
        } else {
            res.status(500).json('Data not found')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

/**
 * Get movie by title
 */

movieController.getMovieTitle = async (req, res) => {
    try {
        let title = req.query.title;
        const find = await userMovie.findAll({
            where: { title: { [Op.iLike]: '%' + title + '%'}}
        });
        res.send({
            status: 200,
            message: `Show a movie with the title ${title}`,
            data: find
        })    
    } catch (error) {
        res.status(500).json(error)
    }
}




module.exports = movieController