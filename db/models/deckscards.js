const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class deckscards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ decks, cards }) {
      deckscards.belongsTo(decks, { foreignKey: 'deck_id:' });
      deckscards.belongsTo(cards, { foreignKey: 'card_id' });
    }
  }
  deckscards.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    deck_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'decks',
      },
    },
    card_id: {
      type: DataTypes.INTEGER,
      references: { model: 'cards' },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'deckscards',
  });
  return deckscards;
};
