const express = require('express')
const router = express.Router()
const controller = require('./controller')

/* GET users listing. */
router.get('/', controller.list)
router.post('/', controller.create)
router.patch('/:todoId', controller.edit)
router.delete('/:todoId', controller.remove)

module.exports = router
