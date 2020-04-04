var express = require('express');
var router = express.Router();
var UserController = require('./Controllers/UserController');


router.get('/users', UserController.index);

router.get('/user/:id', UserController.find);

router.post('/user', UserController.create);

router.put('/user/:id', UserController.update);

router.delete('/user/:id', UserController.delete);



module.exports = router;