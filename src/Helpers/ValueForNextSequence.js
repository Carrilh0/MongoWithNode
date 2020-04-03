const connection = require('../database/Connection');


 function getValueForNextSequence(sequenceOfName){
    
       connection.getDB().collection('sample').findAndModify(
          {_id: sequenceOfName },
          [],
          {$inc:{sequence_value:1}},
          {new: true},
          function(err, obj) {
            //Caso ainda não tenha um registro com esse nome ele gera um novo retornando 0
            if (obj.value == null){
                connection.getDB().collection('sample').insert(
                    {_id : sequenceOfName, sequence_value: 0},
                )
                return 0;
            }
            //Retorna o ultimo increment
            return obj.value.sequence_value;
          }
        )
     }

module.exports = getValueForNextSequence;