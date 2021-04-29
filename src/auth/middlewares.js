const userService = require('../users/service')

const configureUserSession = (req, res, next) => {
  if (req.session.isLogged) {
    req.user = userService.findById(req.session.userId)
  }
  next()
}

module.exports = {
  configureUserSession
}