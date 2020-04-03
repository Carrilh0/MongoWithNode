const connection = require('../database/Connection');

 async function getValueForNextSequence(sequenceOfName){
    var id;

       var documento = connection.getDB().collection('sample').findAndModify(
          {_id: sequenceOfName },
          [],
          {$inc:{sequence_value:1}},
          {new: true},
          
        )

        await documento.then((res)=>{
            id = res.value.sequence_value;
        });

        return id;
     }

module.exports = getValueForNextSequence;