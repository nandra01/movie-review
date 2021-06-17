const {
    movies: userMovie, 
    genre: userGenre,
    char: userChar,
    review: userReview,
    users: users 
} = require('../../models')

const Sequelize = require('sequelize');
const Op = Sequelize.Op

const movieController = {}

movieController.getMovie = async (req, res) => {
    try {
        const movies = await userMovie.findAll({
            include: [{ model: userGenre },{ model: userChar}, {model: userReview, include: [users]}]
        });
        // const movieChar = await userMovie.findAll({
        //     include: [{ model: userChar }]
        // });
        // const usersReview = await users.findAll({
        //     include: [{ model: userReview, include: [userMovie] }]
        // });

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

movieController.findMovieByTitle = async (req, res) => {
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
            message: 'Get all data user',
            data: movies
        };

        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

movieController.getMoviesWithReviewAndUser = async (req, res) => {
    try {
        const movies = await userMovie.findAll({
            include: [{ model: userReview, include: [{ model: users } ] }]
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