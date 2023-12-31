'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE', // this property will allow that if we delete a city so all the airports belonging to that city should be delete
      })
    }
  }
  Airport.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: DataTypes.STRING,
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Airport',
    },
  )
  return Airport
}
