module.exports = {
  async up(queryInterface) {
    const decks = [{
      deck: 'Вопрос1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Вопрос2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Вопрос3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Вопрос4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Вопрос5',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Вопрос6',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'Вопрос7',
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
