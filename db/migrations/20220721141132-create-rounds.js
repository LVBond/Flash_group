module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rounds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
        },
      },
      deck_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'decks',
        },
      },
      Data: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      right: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rounds');
  },
};
