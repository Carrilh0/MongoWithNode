var MongoClient = require('mongodb').MongoClient;

class Conexao{


    async connectToServer() {
            let db = this.db;
            MongoClient.connect("mongodb://localhost:27017/NodeMongo", function(error, client){
                if(error) {
                    console.log('Unable to connect to the Mongodb server. Error : ', error);
                } else {
                    console.log('Connected to mongodb, webservice running on port 27017');
                    db = client;
                    return client;
                }
            });
    }

    async getDB() {
        return this.db;
    }
} 

module.exports = new Conexao;