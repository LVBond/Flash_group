module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quest: {
        type: Sequelize.TEXT,
      },
      answer1: {
        type: Sequelize.TEXT,
      },
      answer2: {
        type: Sequelize.TEXT,
      },
      answer3: {
        type: Sequelize.TEXT,
      },
      answerTrue: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards');
  },
};
