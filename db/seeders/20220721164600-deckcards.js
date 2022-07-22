module.exports = {
  async up(queryInterface) {
    const test = [{
      deck_id: 1,
      card_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      card_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      card_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      card_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      card_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 1,
      card_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      card_id: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      card_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      card_id: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 2,
      card_id: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      card_id: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      card_id: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck_id: 3,
      card_id: 13,
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
    await queryInterface.bulkInsert('deckscards', test);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('deckscards');
  },
};
