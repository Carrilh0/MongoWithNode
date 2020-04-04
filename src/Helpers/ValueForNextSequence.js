const connection = require('../database/Connection');

 async function getValueForNextSequence(sequenceOfName){
    var id;

    // Caso o sample ainda não tenha sido registrado, cria um novo!
    await connection.getDB().collection('users').find().toArray()
        .then(function(res){
            if(res.length == 0){
                console.log("Creating new sample!")
                connection.getDB().collection('sample').insert(
                    {_id : sequenceOfName, sequence_value: 0},
                )
            };
        })

        //autoincrement na collection que referencia o proximo ID
       var documento = connection.getDB().collection('sample').findAndModify(
          {_id: sequenceOfName },
          [],
          {$inc:{sequence_value:1}},
          {new: true},
          
        )

        await documento.then((res)=>{
            id = res.value.sequence_value;
        });

        //Retorna o ID para ser ultilizado no cadastro
        return id;
     }

module.exports = getValueForNextSequence;