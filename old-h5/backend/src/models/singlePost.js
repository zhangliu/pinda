const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db')

module.exports = db.define('singlePost', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nickName: {
    type: DataTypes.CHAR(50)
  },
  phone: {
    type: DataTypes.CHAR(15),
    unique: true,
    set(value) {
      this.setDataValue('phone', value.trim());
    }
  },
  desc: DataTypes.STRING,
}, {
  freezeTableName: true
  // Other model options go here
});