const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Favourite model
const Favourite = sequelize.define('Favourite', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state_province: {
    type: DataTypes.STRING,
  },
  web_page: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});

module.exports = Favourite;
