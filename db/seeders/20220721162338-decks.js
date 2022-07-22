module.exports = {
  async up(queryInterface) {
    const decks = [{
      deck: 'Системы программирования',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Тема2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Тема3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Тема4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Тема5',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Тема6',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Тема7',
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('decks', decks);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
