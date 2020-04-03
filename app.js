var express = require('express');
var routes = require('./src/routes');
var mongo = require('./src/database/Connection');

mongo.connectToServer();

var app = express();

//Define que o retorno padrão será JSON
app.use(express.json());

//Rotas do sistema
app.use(routes);

module.exports = app;