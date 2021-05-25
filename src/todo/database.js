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

const findAllByTerm = async term => {
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

const edit = async (id, text) => {
  const query = `UPDATE todos SET text = "${text}" WHERE id = ${id}`

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.UPDATE
  })

  return result
}

const remove = async id => {
  const query = `DELETE todos WHERE id = ${id}`

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.UPDATE
  })

  return result
}

module.exports = {
  findAll,
  findAllByTerm,
  create,
  edit,
  remove
}
