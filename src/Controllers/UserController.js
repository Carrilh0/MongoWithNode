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
        var id = parseInt(request.params.id);

        await connection.getDB().collection('users').find({_id : id}).toArray()
        .then(function(res){
            return response.send(res);
        })
    }

    async create(request, response)
    {
        //Id do autoincrement
        var id = await helper('user_id');

        //Recupera os valores vindo do JSON
        var {nome, idade, sexo } = request.body;
        
        //Faz o cadastro de um novo usuario ultilizando o auto increment criado no JS
        await connection.getDB().collection('users').insert(
            {_id: id,nome : nome, idade: idade, sexo: sexo},
            function(err, obj){
                response.send(obj.ops[0])
            }
        )
    }
}



module.exports = new UserController;