const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

// Create class
class recomendaciones extends Model {}

recomendaciones.init({
  // Model attributes are defined here
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profesion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'recomendaciones' // We need to choose the model name
});

//Export model for using in other files
module.exports = recomendaciones