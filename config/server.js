const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());

consign({cwd: 'app'})
    .include('routes')
    .then('models')
    .then('controllers')
    .into(app);

module.exports = app;