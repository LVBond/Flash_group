module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deckscards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      deck_id: {
        type: Sequelize.INTEGER,
  
        references: {
          model: 'decks',
        },
      },
      card_id: {
        type: Sequelize.INTEGER,

        references: { model: 'cards' },
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
    await queryInterface.dropTable('deckscards');
  },
};
