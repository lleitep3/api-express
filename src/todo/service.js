const { findAll } = require('./database')
const TodoModel = require('./model')

let TODO_LIST = [
  { id: 123, text: 'primeira tarefa' },
  { id: 124, text: 'segunda tarefa' },
  { id: 125, text: 'terceira tarefa' },
  { id: 126, text: 'quarta tarefa' },
  { id: 127, text: 'quinta tarefa' }
]

class Service {
  findAll () {
    // return findAll()
    return TodoModel.findAll()
  }

  findOne (id) {
    return TODO_LIST.find(todo => todo.id === +id)
  }

  save (todoToSave) {
    const { id, text } = todoToSave

    if (id) {
      const index = TODO_LIST.findIndex(todo => Number(todo.id) === Number(id))
      TODO_LIST[index] = todoToSave
    } else {
      TODO_LIST.push({ id: Math.random(), text })
    }

    return todoToSave
  }

  remove (todoId) {
    TODO_LIST = TODO_LIST.filter(todo => Number(todo.id) !== Number(todoId))
  }
}

const TodoService = new Service()

module.exports = TodoService
