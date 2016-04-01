var path = require('path');
var express = require('express');
var PORT = Number(process.env.PORT || 8080);
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
logLib = require('./lib/log');
app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
passport= require('passport');
var flash = require('connect-flash');

// import models
models = require('./models');

//config
mongoose.connect('mongodb://localhost/dbartisans');
require('./config/passport')(passport);
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret:'sessionOfUser',
                saveUninitialized:true,
                resave:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine','ejs');


app.get('/',function(req,res){
   res.render('index.ejs');
});
// import routing
require('./routing/autentifications');
require('./routing/callback');
require('./routing/users');
require('./routing/domaines');
require('./routing/offres');
require('./routing/avis');
/*
 console.log('----------Adresse--------------');
 var adresse = new models.Adresse({
 lieu:'Tunis',
 pos : {lat:'12515.151515',lng:'1515.181518'},
 dep : 'Dep15648'
 });
 console.log(adresse);
 console.log('------------Mission------------');
 var mission = new models.Mission({
 name:'mission1',
 decs : 'desc mission'
 });
 mission.adresse = adresse;
 console.log(mission);
 */

/*
 console.log('-----Question-----');
 var quest = new models.Question({contents : 'question1'});
 console.log(quest);

 console.log('-----offre-----');
 var offre = new models.Offre({title : 'titreOffre'});
 console.log(offre);

 console.log('-----Devi-----');
 var devi = new models.Devi({title:'titre1'});
 console.log(devi);


 console.log('-----offre.push question-----');
 offre.questions.push(quest);
 console.log(offre);

 console.log('-----devis.push offre-----');
 devi.offres.push(offre);
 console.log(devi);

 console.log('----------');
 console.log(devi.offres[0].questions[0]);
 */
app.listen(PORT,function(){
    console.log('server listen on PORT = ',PORT);
});