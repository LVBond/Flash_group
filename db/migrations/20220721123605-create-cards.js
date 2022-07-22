module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
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
      answer4: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards');
  },
};
