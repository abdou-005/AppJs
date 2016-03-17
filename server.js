var path = require('path');
var express = require('express');
var PORT = Number(process.env.PORT || 8080);
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
logLib = require('./lib/log');
app = express();
var bodyParser = require('body-parser');

// import models
models = require('./models');

//config
mongoose.connect('mongodb://localhost/dbartisans');
//app.use(express.static(__dirname + '/public/'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routing EJS
app.set('view engine','ejs');

app.get('/',function(req,res){
   res.render('index.ejs');
});
app.get('/signup',function(req,res){
    res.render('login.ejs');
});

app.get('/bord',function(req,res){
    res.render('bord.ejs');
});

// import routing
require('./routing/callback');
require('./routing/users');
require('./routing/domaines');


app.listen(PORT,function(){
    console.log('server listen on PORT = ',PORT);
});