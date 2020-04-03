var express = require('express');
var router = express.Router();
var mongo = require('./database/Connection');

router.get('/users',function(request, response)
{
    mongo.getDB().collection('users').find().toArray()
        .then(function(res){
            response.send(res);
        })
});

module.exports = router;