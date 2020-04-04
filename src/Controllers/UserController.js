const connection = require('../database/Connection');
const helper = require('../Helpers/ValueForNextSequence')
class UserController{

    async index(request, response) 
    {

        await connection.getDB().collection('users').find().toArray()
        .then(function(res){
            response.status(200).send(res);;
        })
    }

    async find(request, response)
    {
        var id = parseInt(request.params.id);

        await connection.getDB().collection('users').find({_id : id}).toArray()
        .then(function(res){
            response.status(200).send(res);;
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
                response.status(201).send(obj.ops[0]);
            }
        );
    }

    async update(request, response)
    {
        var id = parseInt(request.params.id);

        var {nome, idade, sexo } = request.body;

        await connection.getDB().collection('users').findOneAndUpdate(
            {_id: id},
            {$set:{nome : nome, idade: idade, sexo: sexo}},
            { returnOriginal: false },
            function(err, obj){
                response.send(obj.value)
            }
        );
    }

    async delete(request,response)
    {
        var id = parseInt(request.params.id);

        await connection.getDB().collection('users').deleteOne({_id: id},
            function(err, obj){
                var status = JSON.stringify(obj.result.n)
                if (status == 1){
                    response.sendStatus(200);
                } else {
                    response.sendStatus(404);
                }
            }
        );
    }

}



module.exports = new UserController;