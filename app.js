var express = require('express');
var routes = require('./src/routes');

var app = express();
//Seta o view engine para EJS
app.set('view-engine','ejs');

//Define que o retorno padrão será JSON
app.use(express.json());

//Rotas do sistema
app.use(routes);

module.exports = app;