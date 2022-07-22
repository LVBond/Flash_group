module.exports = {
  async up(queryInterface) {
    const cards = [{
      quest: 'ВОПРОС1',
      answer1: 'ответ1',
      answer2: 'ответ2',
      answer3: 'ответ3',
      answerTrue: 'ответ3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'ВОПРОС2',
      answer1: 'ответ1',
      answer2: 'ответ2',
      answer3: 'ответ3',
      answerTrue: 'ответ2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'ВОПРОС3',
      answer1: 'ответ1',
      answer2: 'ответ2',
      answer3: 'ответ3',
      answerTrue: 'ответ1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'ВОПРОС4',
      answer1: 'ответ1',
      answer2: 'ответ2',
      answer3: 'ответ3',
      answerTrue: 'ответ2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'ВОПРОС5',
      answer1: 'ответ1',
      answer2: 'ответ2',
      answer3: 'ответ3',
      answerTrue: 'ответ3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'ВОПРОС6',
      answer1: 'ответ1',
      answer2: 'ответ2',
      answer3: 'ответ3',
      answerTrue: 'ответ2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'ВОПРОС7',
      answer1: 'ответ1',
      answer2: 'ответ2',
      answer3: 'ответ3',
      answerTrue: 'ответ1',
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
