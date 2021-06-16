const {
    movies: userMovie, 
    genre: userGenre,
    char: userChar,
    review: userReview,
    users: users 
} = require('../../models')

const movieController = {}


movieController.getMovie = async (req, res) => {
    try {
        const movies = await userMovie.findAll({
            include: [{ model: userGenre }]
        });
        const movieChar = await userMovie.findAll({
            include: [{ model: userChar }]
        });
        const usersReview = await users.findAll({
            include: [{ model: userReview, include: [userMovie] }]
        });

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: {
                movies,
                movieChar,
                usersReview
            }
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};


movieController.getMovieWithGenre = async (req, res) => {
    try {
        const movies = await userMovie.findAll({
            include: [{ model: userGenre }]
        });

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: movies
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};





module.exports = movieController