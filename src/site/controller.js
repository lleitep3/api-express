const AuthService = require("../auth/service");
const UserService = require("../users/service");

class Controller {

  home(req, res) {

    console.log('--------------------')
    console.log('--------------------')
    if (req.session.isLogged) {
      console.log('--------------------')
      console.log('--------------------')
      console.log('--------------------')
      console.log('--------------------')
      res.render("index", {
        user: req.session.user
      });
    } else {
      console.log('+++++++++++++++++++')
      console.log('+++++++++++++++++++')
      res.redirect("login");
    }
  }

  login(req, res) {
    console.log('==================')
    console.log('==================')
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
