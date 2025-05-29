const { Model } = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate ({ User, Contest, Rating }) {
      Offer.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });
      Offer.belongsTo(Contest, { foreignKey: 'contestId', targetKey: 'id' });
      Offer.hasOne(Rating, { foreignKey: 'offerId', targetKey: 'id' });};
  }
  Offer.init (
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      contestId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      text: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      fileName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      originalFileName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: 'pending',
      },
    },
    {
      sequelize,
      modelName: 'Offer',
      timestamps: false
    }
  );

  return Offer;
};