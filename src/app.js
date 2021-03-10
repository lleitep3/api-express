const express = require('express')
const rotasUsuarios = require('./modules/usuarios')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({status: 'ok'})
})

rotasUsuarios(app)

app.listen(3000, () => console.log('listen http://localhost:3000'))
