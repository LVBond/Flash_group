module.exports = {
  async up(queryInterface) {
    const decks = [{
      deck: 'СОВЕТСКИЙ БЫТ',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'ВОПРОСЫ ОТ ЭЛЬБРУСЦЕВ',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      deck: 'ЦИТАТЫ ИЗ ФИЛЬМОВ ПРО ЛЮБОВЬ',
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
