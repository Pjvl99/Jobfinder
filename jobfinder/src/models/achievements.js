const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

// Create class
class logros extends Model {}

logros.init({
  // Model attributes are defined here
  logro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'logros' // We need to choose the model name
});

//Export model for using in other files
module.exports = logros