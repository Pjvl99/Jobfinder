const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

// Create class
class JobOffer extends Model {}

JobOffer.init({
  // Model attributes are defined here
  departamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 cargoSolicitado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  puestosVacantes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  experiencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate : {
        customValidator(value){
          if(value < 15){
              throw new Error("Edad muy pequeña");
          }  
        }
    }
  },
  salario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vehiculo: {
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
  modelName: 'JobOffer' // We need to choose the model name
});

//Export model for using in other files
module.exports = JobOffer