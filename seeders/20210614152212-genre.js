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
     await queryInterface.bulkInsert(
    'genres', [
      {
        movie_id: 1,
        sub_genre_id: 1
      },
      {
        movie_id: 1,
        sub_genre_id: 2
      },
      {
        movie_id: 1,
        sub_genre_id: 3
      },
      {
        movie_id: 1,
        sub_genre_id: 4
      },
      {
        movie_id: 1,
        sub_genre_id: 5
      },
      {
        movie_id: 1,
        sub_genre_id: 6
      },
      {
        movie_id: 1,
        sub_genre_id: 7
      },
      {
        movie_id: 1,
        sub_genre_id: 8
      },
      {
        movie_id: 1,
        sub_genre_id: 9
      },
      {
        movie_id: 1,
        sub_genre_id: 10
      },
      {
        movie_id: 1,
        sub_genre_id: 11
      },
      {
        movie_id: 1,
        sub_genre_id: 12
      },
      {
        movie_id: 1,
        sub_genre_id: 13
      },
      {
        movie_id: 1,
        sub_genre_id: 14
      },
      {
        movie_id: 1,
        sub_genre_id: 15
      },
      {
        movie_id: 1,
        sub_genre_id: 16
      },
      {
        movie_id: 1,
        sub_genre_id: 17
      },
      {
        movie_id: 1,
        sub_genre_id: 18
      },
      {
        movie_id: 1,
        sub_genre_id: 19
      },
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
