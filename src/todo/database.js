const { QueryTypes } = require('sequelize')
const { sequelize } = require('../common/database')

const findAll = async () => {
  const query = 'SELECT * FROM todos'

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT
  })

  return result
}

const create = async text => {
  const query = `INSERT INTO todos (text) VALUES ("${text}")`

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT
  })

  return result
}

module.exports = {
  findAll,
  create
}
