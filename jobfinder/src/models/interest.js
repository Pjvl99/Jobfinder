const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

// Create class
class intereses extends Model {}

intereses.init({
  // Model attributes are defined here
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'intereses' // We need to choose the model name
});

//Export model for using in other files
module.exports = intereses