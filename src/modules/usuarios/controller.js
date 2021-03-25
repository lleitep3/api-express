const usuarios = []

const controller = {
  find(req, res) {
    const usuariosFiltrados = req.query.length
      ? usuarios.filter((usuario) => usuario.nome.toLocaleLowerCase() === req.query.nome.toLocaleLowerCase())
      : usuarios

    res.json(usuariosFiltrados)
  },

  create(req, res) {

    console.log(req.query)
    console.log(req.body)

    usuarios.push(req.body)
    res.json(req.body)
  }
}

module.exports = controller