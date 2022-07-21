'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class decks_cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  decks_cards.init({
    deck_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'decks_cards',
  });
  return decks_cards;
};