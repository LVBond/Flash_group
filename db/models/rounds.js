const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class rounds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ decks, users }) {
      rounds.belongsTo(decks, { foreignKey: 'deck_id' });
      rounds.belongsTo(users, { foreignKey: 'user_id' });
    }
  }
  rounds.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'users',
      },
    },
    deck_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'decks',
      },
    },
    Data: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    right: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'rounds',
  });
  return rounds;
};
