const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

// Create class
class skills extends Model {}

skills.init({
  // Model attributes are defined here
  skillname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expertise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'skills' // We need to choose the model name
});

//Export model for using in other files
module.exports = skills