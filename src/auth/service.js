
const USER_LIST = [{ id: 123, name: 'Manolo', email: 'manolo@email.com', senha: '12345'}]

class Service {

  isPasswordValid(password, userPassword) {
    console.log(password,userPassword)
    console.log(password === userPassword)
    return password === userPassword
  }

}

const AuthService = new Service()

module.exports = AuthService