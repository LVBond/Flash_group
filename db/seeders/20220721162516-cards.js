module.exports = {
  async up(queryInterface) {
    const cards = [{
      quest: 'Что мечтал купить каждый советский человек?',
      answer1: '1. квартиру, машину, дачу',
      answer2: '2. мебель, люстру, полное собрание сочинений Ленина',
      answer3: '3. Для обеспечения бесперебойной работы программ',
      answerTrue: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Под какую вечернюю телепередачу засыпали все дети Советского Союза с 1964 года?',
      answer1: 'Приходит в гости сон',
      answer2: 'В гостях у сказки',
      answer3: 'Спокойной ночи, малыши',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Какой налог действительно существовал в СССР?',
      answer1: 'налог на школьников',
      answer2: 'налог на владельцев домашних библиотек',
      answer3: 'налог на холостяков',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Найдите неправильное соответствие субкультуры и времени ее расцвета в СССР.',
      answer1: '1970-е – хиппи',
      answer2: '1950-е – стиляги',
      answer3: '1960-е – денди',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      quest: 'Как назывался основной художественный метод в советском искусстве?',
      answer1: 'соцреализм',
      answer2: 'пролеткульт',
      answer3: 'комреализм',
      answerTrue: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Какой день недели был объявлен “рыбным днем”?',
      answer1: 'понедельник',
      answer2: 'четверг',
      answer3: 'воскресенье',
      answerTrue: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      quest: 'ВОПРОС ОТ ГОШИ: Кто лучше всех танцует на вечерниках Эльбруса?',
      answer1: 'Колбасный король',
      answer2: 'Игорь, которого нет',
      answer3: 'Иона',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      quest: 'ВОПРОС ОТ КРИСТИНЫ: Когда появились новые мыльницы?',
      answer1: 'Вчера',
      answer2: 'Сегодня',
      answer3: 'Да ты меня прям до экстаза доводишь своими вопросами...',
      answerTrue: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'ВОПРОС ОТ ЛЮБЫ: Лучший город на земле',
      answer1: 'Нью-Йорк',
      answer2: 'Дубай',
      answer3: 'Пятигорск',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      quest: 'ВОПРОС ОТ ВИТАЛИЯ: Как не сойти с ума на 2 фазе',
      answer1: '10 часов сна',
      answer2: 'Алкоголь',
      answer3: 'У вас это не получится',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      quest: 'Что просит пообещать Розу Джон?',
      answer1: 'Передать письмо родственникам',
      answer2: 'Любить его всегда',
      answer3: 'Выжить',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      quest: '«Может быть я не самый умный, но я знаю что такое любовь», - кому принадлежат эти слова?',
      answer1: 'Форресту Гампу',
      answer2: 'Сквидворту',
      answer3: 'Спанч Бобу',
      answerTrue: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      quest: 'Что является одним из недостатков женщины в фильме «В джазе только девушки»?',
      answer1: 'Гордость',
      answer2: 'Быть блондинкой',
      answer3: 'Быть мужчиной',
      answerTrue: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
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
    await queryInterface.bulkDelete('cards');
  },
};
