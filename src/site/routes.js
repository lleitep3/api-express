const express = require('express');
const router = express.Router();
const controller = require('./controller')

/* GET home page. */
router.get('/', controller.home);

router.get('/my-todo-list', controller.todoList);

router.get('/login', controller.login);

router.post('/login', controller.doLogin);

module.exports = router;
