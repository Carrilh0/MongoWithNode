var express = require('express');
var router = express.Router();
var mongo = require('./database/Connection');

router.get('/',function(request, response)
{
    console.log(mongo.getDB())
});

module.exports = router;