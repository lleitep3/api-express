const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/authenticate', controller.authenticate);

router.post('/register', controller.register);

module.exports = router;
