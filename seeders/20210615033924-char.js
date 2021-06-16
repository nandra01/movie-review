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
        movie_id: 1,
        character_name: 'Carol Danvers',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/1.jpeg?alt=media&token=f9e803cd-d130-4e38-b9bd-f05fd76dcdf8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Nick Fury',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/2.jpeg?alt=media&token=842b4412-0e96-41de-81ff-3a38eb3f472a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Talos',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/3.jpeg?alt=media&token=acf4dc96-d753-40b5-93f9-1e6ec0370dd6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Yon-Rogg',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/4.jpeg?alt=media&token=b6b19869-9708-49c3-b602-a4ef2a231ead',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Doctor Minerva',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/5.jpeg?alt=media&token=71f78dcd-e389-48e9-808e-39fdbbb6ed04',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Maria Rambeau',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/6.jpeg?alt=media&token=f3e4c925-55a9-4436-8f1c-2bdee7472239',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Ronan',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/7.jpeg?alt=media&token=31c3789b-3a59-43ea-8746-a891970df964',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Korath The Purseur',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/8.jpeg?alt=media&token=39fb92c5-61f8-40f9-a1f2-f396ce2fa84a',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Phil Caulson',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/9.jpeg?alt=media&token=3eaa60e0-e579-43e6-8453-d6b4b659e809',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Captain Atlas',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/10.jpeg?alt=media&token=15538af7-179f-4208-9171-8c4782ad8b93',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Bron-Char',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/11.jpeg?alt=media&token=33f3f6ce-85b9-47e9-a0ea-dc57632d5e70',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Supreme Intelegent',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/12.jpeg?alt=media&token=c30fe734-433c-4be8-b872-9decb0e821ad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Soren',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/13.jpeg?alt=media&token=b817991d-f038-47a8-b401-0997e869f0b6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Norex',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/14.jpeg?alt=media&token=c0751634-bc17-4084-85f4-17c0f3bd8bb4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        character_name: 'Soh-Rarr',
        character_picture: 'https://firebasestorage.googleapis.com/v0/b/mini-project-chars.appspot.com/o/15.jpeg?alt=media&token=9e854d7d-d263-47f1-9cab-78dc2bab4129',
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
