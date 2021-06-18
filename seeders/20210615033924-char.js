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
        movie_id: 71,
        character_name: 'Lucy',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Flucy.jpg?alt=media&token=ce6c15cf-9877-4478-b953-0a43337b8fa0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Max Bishop',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Fchris.jpg?alt=media&token=799db48c-e193-4031-9c78-24445cf74d39',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Ms. Partridge',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Frachel.jpg?alt=media&token=2bbc31dd-3bc2-4d19-bb7c-f1bbc16bdc79',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Sal ',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Fsal.jpeg?alt=media&token=af8409b5-a5de-44d1-8dd0-0596aa06bca1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Mr. Hubert',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Fdouglas.jpeg?alt=media&token=19ef6cb8-6664-42bd-a800-386f846cded8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'The Stranger',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Fstranger.jpeg?alt=media&token=1aac2985-41cf-4150-84ed-7b0b7ef2e05d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Ruby',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Fruby.jpeg?alt=media&token=ad141278-b35b-433d-9090-c6a161bbb48a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Mr. Charlie',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Fpaul.jpg?alt=media&token=d7c504a1-df63-45e5-9f4b-6258bffd24b9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Mr. Lotsworth',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Faltman.jpg?alt=media&token=132ea829-6dbd-4bbb-8fce-68068df00a42',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 71,
        character_name: 'Welcome Clerk',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fcharacter%2Flandyx.jpg?alt=media&token=7d2355c0-2dd9-460c-91e0-dfcf52f20963',
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
