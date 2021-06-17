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
      'chars', [
      {
        movie_id: 22,
        character_name: 'Ash Ketchum',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fash.jpg?alt=media&token=36ff1101-e8bf-4dc8-8c1b-f6cd5c371df9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Pikachu',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fpikachu.png?alt=media&token=79e6953f-dd95-452a-aeda-ff1ab9f41d08',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Marshadow',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fmars.jpeg?alt=media&token=872ba171-4663-4073-9f88-ab7d73b5841f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'James ',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fjames.jpg?alt=media&token=2c3c7a8d-a87c-4ee9-9c00-3f2003585582',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Jessie',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fjessi.jpg?alt=media&token=0ef50cf3-91b1-411d-a280-536cadd27b9c',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Lycanroc',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Flyc.png?alt=media&token=658b7088-335a-4188-ba20-b6eade4f5c9a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Joy',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fjoy.png?alt=media&token=9957b6c0-a812-46ce-b7e6-b3f8a4e5b8b1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Meowth',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fmeout.jpg?alt=media&token=fb728edd-a954-4ce8-b04f-10c0256fdefe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Verity',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fverity.png?alt=media&token=82ab5ad1-1f95-4827-8a83-826584eb7b74',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 22,
        character_name: 'Sorrel',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fcharacter%2Fpokemon%20i%20choose%20you%2Fsorrel.png?alt=media&token=61a782a9-66ab-43f7-af08-0c9acfbe0bd0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
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
