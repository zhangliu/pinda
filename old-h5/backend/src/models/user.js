const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db')

module.exports = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  wechatName: {
    type: DataTypes.CHAR(50)
  },
  sex: {
    type: DataTypes.TINYINT(1),
  },
  phone: DataTypes.CHAR(15),
}, {
  freezeTableName: true
  // Other model options go here
});