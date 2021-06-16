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
          title: 'Black Clover',
          description: 'Black Clover (bahasa Jepang: ブラッククローバー Hepburn: Burakku Kurōbā) adalah sebuah seri manga shōnen bergenre fantasi asal Jepang yang ditulis dan diilustrasikan oleh Yūki Tabata',
          release_date: '16 Februari 2015',
          director: 'Masahiro Sugasawa, Maiko Isotani, Naomi Komatsu',
          featured_song: 'Opening Theme 1 – Haruka Mirai',
          budget: '1000000 Yen',
          rating: 8,
          synopsis: 'Ceritanya mengisahkan tentang seorang anak laki-laki bernama Asta yang lahir tanpa kekuatan sihir, suatu fenomena yang tidak normal di dunia tempatnya tinggal.',
          trailer: 'https://www.youtube.com/watch?v=MH4pWlX4LqI',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fposter%2F345c3185d85e7c67931a44d542ca9760.jpg?alt=media&token=63955ee6-12fd-4d1b-bdc3-c6399dac72c2',
          category_id: 6,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Attack On Titan Final Season 4',
          description: 'Attack on Titan (進撃の巨人) merupakan anime yang diangkat dari manga berjudul sama karya Hajime Isayama.',
          release_date: '9 September 2009',
          director: 'Kensuke Tateishi, Toshihiro Maeda, Tetsuya Kinoshita',
          featured_song: '心臓を捧げよ！',
          budget: '1500000 Yen',
          rating: 9,
          synopsis: 'Attack on Titan berkisah tentang Eren muda yang kampung halamannya hancur dan ibunya terbunuh.',
          trailer: 'https://www.youtube.com/watch?v=o_go-8TFBXs',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fposter%2Faot.jpeg?alt=media&token=d39f955c-d449-4cea-aeef-47c3fbe5b9f4',
          category_id: 6,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'One Piece: Stampede',
          description: 'One Piece: Stampede (bahasa Jepang: ワンピーススタンピード Hepburn: Wan Pīsu Sutanpīdo) adalah sebuah film anime Jepang bergenre fantasi laga petualangan ',
          release_date: '1 Agustus 2019',
          director: 'Hiroki Koyama[',
          featured_song: 'One Piece stampede Song [GONG]',
          budget: '1500000 Yen',
          rating: 8.5,
          synopsis: 'Bajak Laut Topi Jerami datang ke Pulau Delta untuk mengikuti Festival Bajak Laut, sebuah pertemuan bajak laut besar yang diselenggarakan oleh master festival bernama Buena Festa.',
          trailer: 'https://www.youtube.com/watch?v=S8_YwFLCh4U',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fposter%2Fdownload.jpeg?alt=media&token=929741bf-812f-48e0-ab37-274e34c0ea2f',
          category_id: 6,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'My Hero Academia',
          description: 'Boku no Hero Academia (bahasa Jepang: 僕のヒーローアカデミア Hepburn: Boku no Hīrō Akademia).',
          release_date: '7 Juli 2014',
          director: 'Wakana Okamura Kazumasa Sanjōba Hiroshi Kamei',
          featured_song: 'Hero too',
          budget: '2000000 Yen',
          rating: 8,
          synopsis: 'Ceritanya mengisahkan tentang Izuku Midoriya, seorang anak lelaki tanpa kekuatan super (yang disebut quirk).',
          trailer: 'https://www.youtube.com/watch?v=MH4pWlX4LqI',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fposter%2FBoku_no_Hero_Academia_Volume_1.png?alt=media&token=43ce73ad-9e51-4309-b386-8003b2b27f7c',
          category_id: 6,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Pokémon the Movie: I Choose You',
          description: 'Pokémon the Movie: I Choose You! (bahasa Jepang: 劇場版 ポケットモンスタ ー キミにきめた! Hepburn: Gekijō-ban Poketto Monsuta - Kimi Ni kimeta!',
          release_date: '6 Juli 2017',
          director: 'Satoshi Shimohira',
          featured_song: 'Pokémon Movie I choose you!',
          budget: '2400000 Yen',
          rating: 7,
          synopsis: 'Film ini adalah reboot dari film seri Pokémon, dan film Pokémon kedua puluh keseluruhan, dirilis untuk memperingati ulang tahun ke-20 Anime ini.',
          trailer: 'https://www.youtube.com/watch?v=r12w4iRBLp4',
          watchlist_id: 1,
          poster: 'https://firebasestorage.googleapis.com/v0/b/mini-project-40e2d.appspot.com/o/Poster%20anime%2Fposter%2FMV5BM2U3NmI4YzItYmRiNi00M2UxLWExNTYtNDZkZmJlNzlmM2M3XkEyXkFqcGdeQXVyNDkzMjE0NDE%40._V1_.jpg?alt=media&token=6b965b97-dc3f-42e0-b408-938bbec3350a',
          category_id: 6,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },


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
