const service = require('./service')

class Controller {
  async list (req, res) {
    const todoList = await service.findAll()
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

    res.json({ success: true })
  }

  remove (req, res) {
    const { todoId } = req.params

    service.remove(todoId)

    res.json({ success: true })
  }
}

const TodoController = new Controller(service)

module.exports = TodoController
