const { DataTypes } = require('sequelize')
const { sequelize } = require('../common/database')

const TodoModel = sequelize.define(
  'todo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: DataTypes.STRING
  },
  {
    timestamps: false
  }
)

module.exports = TodoModel
