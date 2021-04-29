const express = require('express');
const router = express.Router();
const controller = require('./controller')

/* GET home page. */
router.get('/', controller.home);

router.get('/login', controller.login);

router.post('/login', controller.doLogin);

module.exports = router;
