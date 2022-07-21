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
      },
      deck_id: {
        type: Sequelize.INTEGER,
      },
      Data: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      count_card: {
        type: Sequelize.INTEGER,
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
