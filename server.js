const express = require('express')
const app = express()
const users = require('./src/modules/usuarios')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))

users(app)

app.listen(3000, () => console.log('listen http://localhost:3000'))
