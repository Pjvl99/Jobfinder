const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

// Create class
class educacion extends Model {}

educacion.init({
  // Model attributes are defined here
  lugar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechainicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechafin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  profesion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'educacion' // We need to choose the model name
});

//Export model for using in other files
module.exports = educacion