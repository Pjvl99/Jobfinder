const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

// Create class
class jobHistory extends Model {}

jobHistory.init({
  // Model attributes are defined here
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sueldo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  puesto: {
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
  Beneficios: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isNumeric: true
    }
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'jobHistory' // We need to choose the model name
});

//Export model for using in other files
module.exports = jobHistory