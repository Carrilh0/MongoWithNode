const mongo = require('../database/Connection');

class UserController{

    async listar(request, response) 
    {
        await mongo.getDB().collection('users').find().toArray()
        .then(function(res){
            return response.send(res);
        })
    }
}



module.exports = new UserController;