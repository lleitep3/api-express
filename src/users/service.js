
const USER_LIST = [
  { id: 123, name: 'Manolo', email: 'manolo@email.com', password: '12345'},
  { id: 123, name: 'Silvana', email: 'silvana@email.com', password: '12345'}
]

class Service {

  findByEmail(email) {
    return USER_LIST.find(user =>  user.email === email)
  }

  findById(id) {
    return USER_LIST.find(user =>  user.id === +id)
  }

  create(user) {
    USER_LIST.push(user)
  }
}

const UserService = new Service()

module.exports = UserService