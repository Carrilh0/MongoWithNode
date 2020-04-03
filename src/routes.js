var express = require('express');
var router = express.Router();
var UserController = require('./Controllers/UserController');


router.get('/users', UserController.listar);

module.exports = router;