module.exports = {
  async up(queryInterface) {
    const cards = [{
      quest: 'Для чего используют программы-ассемблеры?',
      answer1: '1. Для создания программ',
      answer2: '2. Для перевода программ в машинные коды',
      answer3: '3. Для обеспечения бесперебойной работы программ',
      answerTrue: 'answer2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Какой язык называется машинно-ориентированным?',
      answer1: 'Язык, определяющийся набором команд конкретного процессора',
      answer2: 'Любой универсальный язык программирования',
      answer3: 'Язык, в основу которого заложены принципы объектно-ориентированного программирования',
      answerTrue: 'answer1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Выберите верное утверждение о языке ассемблер',
      answer1: 'Программа, написанная на Ассемблере для одного процессора не будет работать на другом',
      answer2: 'Программа, написанная на Ассемблере для одного процессора будет работать на любом другом',
      answer3: 'Программы, написанные на языке Ассемблер создаются только в среде Linux',
      answerTrue: 'answer1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Как называют программы, предназначенные для перевода в машинные коды программы, написанной на языке высокого уровня?',
      answer1: 'конденсаторы',
      answer2: 'транслитеры',
      answer3: 'трансляторы',
      answerTrue: 'answer3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ];
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
