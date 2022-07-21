const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class decks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ deckscards }) {
      // define association here
      decks.hasMany(deckscards, { foreignKey: 'deck_id' });
    }
  }
  decks.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    deck: {
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
    modelName: 'decks',
  });
  return decks;
};
