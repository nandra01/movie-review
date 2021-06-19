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
        movie_id: 75,
        character_name: 'Grave-digger',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fbullets%2Fchar%2Fcgri.jpg?alt=media&token=9faeb1a9-186c-46b4-9fa3-36c469f9892e',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 75,
        character_name: 'Rob Justice',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fbullets%2Fchar%2Frob.jpg?alt=media&token=833e7e79-7ffe-409d-aa7d-5158a73c3c28',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 75,
        character_name: 'Raksha',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fbullets%2Fchar%2Fraksa.jpg?alt=media&token=21150e6a-20f3-4b9b-9bf2-3667259c914f',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 75,
        character_name: 'Nina ',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fbullets%2Fchar%2Fnina.jpg?alt=media&token=0bca2f7d-7baa-4cb6-8eda-b04d6b548726',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 75,
        character_name: 'Lena',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/comedy%2Fbullets%2Fchar%2Flwna.jpg?alt=media&token=b13f5efd-f5fc-480f-bbd4-913c1af7c767',
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
