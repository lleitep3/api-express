const { findAll, findAllByTerm, create, edit, remove } = require('./database')
const TodoModel = require('./model')

class Service {
  findAll ({ limit, page, term }) {
    // if (term) {
    //   return findAllByTerm(term)
    // } else {
    //   return findAll({ limit, page })
    // }

    return term ? findAllByTerm(term) : findAll({ limit, page })

    // return TodoModel.findAll()
  }

  findOne (id) {
    return TODO_LIST.find(todo => todo.id === +id)
  }

  save (todoToSave) {
    const { id, text } = todoToSave

    return id ? edit(id, text) : create(text)
  }

  remove (todoId) {
    remove(todoId)
  }
}

const TodoService = new Service()

module.exports = TodoService
