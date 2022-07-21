module.exports = {
  async up(queryInterface) {
    const cards = [{
      card: 'ОТВЕТ1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      card: 'ОТВЕТ2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      card: 'ОТВЕТ3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      card: 'ОТВЕТ4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      card: 'ОТВЕТ5',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      card: 'ОТВЕТ6',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      card: 'ОТВЕТ7',
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
    await queryInterface.bulkInsert('cards', cards);
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
