const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')

const todoRouter = require('./todo/routes')

const app = express()

require('./todo/model')
// view engine setup
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todo', todoRouter)

app.use('/', (_, res) => {
  res.send('nada por aqui :)')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  console.log(err.message)
  res.json(err.message)
})

module.exports = app
