var MongoClient = require('mongodb').MongoClient;

var db;

var conexao = 
{
    connectToServer: function( callback ) {
        MongoClient.connect("mongodb://localhost:27017/NodeMongo", function(error, client){
            if(error) {
                console.log('Unable to connect to the Mongodb server. Error : ', err);
            } else {
                console.log('Connected to mongodb, webservice running on port 27017');
                db = client;
                return client;
            }
        });
    },

    getDB: function() {
        return db;
    }
} 

module.exports = conexao;