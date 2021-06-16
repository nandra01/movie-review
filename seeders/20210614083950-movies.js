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
      'movies', [
        {
          title: 'Ant-man',
          description: 'Lorem ipsum',
          release_date: 'June, 27 2111',
          director: 'Orang',
          featured_song: 'theme song Ant-man',
          budget: '300 Dollar USD',
          rating: 8,
          synopsis: 'Lorem ipsum ipsum lorem',
          trailer: 'Ini trailer pokoknya',
          watchlist_id: 2,
          poster: 'ini Poster film',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {})

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
