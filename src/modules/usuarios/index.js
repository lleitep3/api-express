
const usuarios = [
  {
      "nome": "Robson",
      "username": "rbalbina",
      "idade": 15
  },
  {
      "nome": "Willian",
      "username": "raio",
      "idade": 21
  },
  {
      "nome": "Leandro",
      "username": "lleitep3",
      "idade": 18
  }
]

const rotasUsuarios = (app) => {

  app.get('/usuarios', (req, res) => {

    console.log(req.query)

    const usuariosFiltrados = usuarios.filter((usuario) => usuario.nome.toLocaleLowerCase() === req.query.nome.toLocaleLowerCase())

    res.json(usuariosFiltrados)
  })

  app.post('/usuarios', (req, res) => {

    usuarios.push(req.body)

    res.json(req.body)
  })

}

module.exports = rotasUsuarios