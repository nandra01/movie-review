'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('genres', [
      {
        movie_id: 1,
        genre_name: "Action"
    },
    {
      movie_id: 1,
      genre_name: "Adventure"
    },
    {
      movie_id: 1,
      genre_name: "Animation"
    },
    {
      movie_id: 1,
      genre_name: "Comedy"
    },
    {
      movie_id: 1,
      genre_name: "Crime"
    },
    {
      movie_id: 1,
      genre_name: "Documentary"
    },
    {
      movie_id: 1,
      genre_name: "Drama"
    },
    {
      movie_id: 1,
      genre_name: "Family"
    },
    {
      movie_id: 1,
      genre_name: "Fantasy"
    },
    {
      movie_id: 1,
      genre_name: "History"
    },
    {
      movie_id: 1,
      genre_name: "Horror"
    },
    {
      movie_id: 1,
      genre_name: "Music"
    },
    {
      movie_id: 1,
      genre_name: "Mystery"
    },
    {
      movie_id: 1,
      genre_name: "Romance"
    },
    {
      movie_id: 1,
      genre_name: "Science Fiction"
    },
    {
      movie_id: 1,
      genre_name: "TV Movie"
    },
    {
      movie_id: 1,
      genre_name: "Thriller"
    },
    {
      movie_id: 1,
      genre_name: "War"
    },
    {
      movie_id: 1,
      genre_name: "Western"
    }
    ])


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
