const connection = require('../database/Connection');
const helper = require('../Helpers/ValueForNextSequence')
class UserController{

    async index(request, response) 
    {
        helper("user_id")
        await connection.getDB().collection('users').find().toArray()
        .then(function(res){
            return response.send(res);
        })
    }

    async find(request, response)
    {
        var { id } = request.params;
        await connection.getDB().collection('users').find({_id : teste}).toArray()
        .then(function(res){
            return response.send(res);
        })
    }

    async create(request, response)
    {
        
    }
}



module.exports = new UserController;