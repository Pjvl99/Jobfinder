const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')
const bcrypt = require('bcryptjs')

// Create class
class User extends Model {
}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('FirstName is mandatory');
        }
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(!this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('LastName is mandatory');
        }
      }
    }
  },
  enterpriseName: {
    type: DataTypes.STRING,
    allowNull: true,
    validate : {
      customValidator(value){
        if(this.isEnterprise && (value == null || value.length < 2 || value.length > 40)){
          throw new Error('EnterpriseName is mandatory');
        }
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    set(value){
      this.setDataValue('password', bcrypt.hashSync(value, 8))
    }
  },
  isEnterprise: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  token: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

//Export model for using in other files
module.exports = User