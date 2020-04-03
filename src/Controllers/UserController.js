const connection = require('../database/Connection');
const helper = require('../Helpers/ValueForNextSequence')
class UserController{

    async index(request, response) 
    {

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
        var id = await helper('user_id');
        
        var {nome, idade, sexo } = request.body;   
        await connection.getDB().collection('users').insert(
            {_id: id,nome : nome, idade: idade, sexo: sexo},
            function(err, obj){
                console.log(obj)
            }
        )
    }
}



module.exports = new UserController;