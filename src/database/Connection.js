var MongoClient = require('mongodb').MongoClient;

class Conexao{


    connectToServer() {
        const dbName = 'MongoNode';

            MongoClient.connect("mongodb://localhost:27017/MongoNode", (error, client) => {
                if(error) {
                    console.log('Unable to connect to the Mongodb server. Error : ', error);
                } else {
                    console.log('Connected to mongodb, webservice running on port 27017');
                    this.db = client.db(dbName);
                  //  client.close();
                }
            });
    }  

    getDB() {
        return this.db;
    }
} 

module.exports = new Conexao;