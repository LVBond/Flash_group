const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ deckscards }) {
      // define association here
      cards.belongsTo(deckscards, { foreignKey: 'card_id' });
    }
  }
  cards.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    quest: {
      type: DataTypes.TEXT,
    },
    answer1: {
      type: DataTypes.TEXT,
    },
    answer2: {
      type: DataTypes.TEXT,
    },
    answer3: {
      type: DataTypes.TEXT,
    },
    answerTrue: {
      type: DataTypes.TEXT,
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
    modelName: 'cards',
  });
  return cards;
};
