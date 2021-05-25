const service = require('./service')

class Controller {
  async list (req, res) {
    const { limit = 2, page = 1, term = null } = req.query

    const todoList = await service.findAll({
      limit,
      page,
      term
    })
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
