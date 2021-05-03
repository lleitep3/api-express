const service = require('./service')

class Controller {

  controller(service) {
    service = service
  }

  list (req, res) {
    const todoList = service.findAll()
    res.json(todoList)
  }

  create (req, res) {
    const { text } = req.body

    service.save({ text })

    res.status(201)
    res.json({ success: true })
  }

  edit (req, res) {
    const { todoId } = req.params
    const { text } = req.body

    service.save({ id: todoId, text })

    req.json({ success: true })
  }

  remove (req, res) {
    const { todoId } = req.params

    service.remove(todoId)

    req.json({ success: true })
  }

}

const TodoController = new Controller(service)

module.exports = TodoController