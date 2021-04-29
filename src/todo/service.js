
const TODO_LIST = [{ id: 123, text: 'primeira tarefa'}]

class Service {

  findAll() {
    return TODO_LIST
  }

  findOne(id) {
    return TODO_LIST.find(todo =>  todo.id === +id)
  }

  save(todoToSave) {
    const { id, text } = todoToSave

    if (id) {
      index = TODO_LIST.findIndex(todo => todo.id === id)
      TODO_LIST[index] = todoToSave
    } else {
      TODO_LIST.push({ id: Math.random(), text })
    }

    return todoToSave
  }
}

const TodoService = new Service()

module.exports = TodoService