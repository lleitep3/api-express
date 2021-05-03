const AuthService = require("../auth/service");
const UserService = require("../users/service");
const TodoService = require("../todo/service");

class Controller {

  home(req, res) {

    if (req.session.isLogged) {
      res.render("index", {
        user: req.session.user
      });
    } else {
      res.redirect("login");
    }
  }

  todoList(req, res) {
    res.render("todo-list", {
      todoList: TodoService.findAll()
    });
  }

  login(req, res) {
    if (req.session.isLogged) {
      res.redirect("index");
    } else {
      res.render("login");
    }
  }

  doLogin(req, res) {
    const { email, password } = req.body;

    const user = UserService.findByEmail(email);

    if (!user) {
      res.render("login", { errorMessage: "email ou senha inválidos" });
      return;
    }

    if (!AuthService.isPasswordValid(password, user.password)) {
      res.render("login", { errorMessage: "email ou senha inválidos" });
      return;
    }

    req.session.isLogged = true;
    req.session.user = user
    res.redirect("/");
  }
}

const SiteController = new Controller();

module.exports = SiteController;
