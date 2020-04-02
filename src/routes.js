var express = require('express');
var router = express.Router();

router.get('/',function(request, response)
{
    response.end("Hello!")
});

module.exports = router;