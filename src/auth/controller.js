const AuthService = require('./service')
const UserService = require('../users/service')

class Controller {
  constructor({ AuthService, UserService }) {
    this.authService = AuthService
    this.userService = UserService
  }

  authenticate(req, res) {
    const { email, password } = req.body

    const user = this.userService.findByEmail(email)

    if (!user) {
      res.send(401, 'email ou senha inválidos')
    }

    if (!this.authService.isPasswordValid(password, user.password)) {
      res.send(401, 'email ou senha inválidos')
    }
  }

  register(req, res) {
    const { name, email, password } = req.body
    this.userService.create({ name, email, password })

    res.status(201)
    res.json({ success: true })
  }
}

const AuthController = new Controller({
  AuthService,
  UserService
})

module.exports = AuthController