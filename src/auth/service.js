
const USER_LIST = [{ id: 123, name: 'Manolo', email: 'manolo@email.com', senha: '12345'}]

class Service {

  isPasswordValid(password, userPassword) {
    console.log(password,userPassword)
    console.log(password === userPassword)
    return password === userPassword
  }

  save(userToSave) {
    const { id, text } = userToSave

    if (id) {
      index = USER_LIST.findIndex(user => user.id === id)
      USER_LIST[index] = userToSave
    } else {
      USER_LIST.push({ id: Math.random(), text })
    }

    return userToSave
  }
}

const AuthService = new Service()

module.exports = AuthService