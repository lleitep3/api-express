const controller = require('./controller')

const initialize = (app) => {
  app.get('/usuarios', controller.find)
  app.post('/usuarios', controller.create)
}

module.exports = initialize