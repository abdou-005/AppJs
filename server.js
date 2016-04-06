//== modules =================================================
var express = require('express');
var methodOverride = require('method-override');
var favicon = require('serve-favicon');
var logger = require('morgan');
passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
Promise = require('bluebird'); // lib for callback
mongoose = Promise.promisifyAll(require('mongoose')); //add bluebird to  Mongo support
logLib = require('./lib/log');
app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);


//== configuration ===========================================
var port = process.env.PORT || 8080; // set our port
config = require('./config/main');// config files
mongoose.connect(config.url);// connect to our mongoDB database

// Initialize Passport
require('./config/passport')(passport);

app.set('superSecret', config.secret); // secret variable

//== Initialize models =======================================
models = require('./app/Models');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// get all data/stuff of the body (POST) parameters
app.use(logger('dev'));
/*app.use(session({
 secret: 'PFE secret'
 //cookie: { expires : new Date(Date.now() + 60000) }

 }));*/
app.use(cookieParser());
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(passport.initialize());
app.use(passport.session());

// =======================
// routes ================
// =======================

// basic route------------------------

//require('./app/routes/autentificationspassport')(passport);
require('./app/routes/users');
require('./app/routes/domaines');
require('./app/routes/offres');
require('./app/routes/avis');
require('./app/routes/demanderDevis');

// require var ROUTES -------------------
var authenticatejwt = require('./app/routes/authenticationjwt');
var demandeDevis = require('./app/routes/demanderDevis');

// apply the routes to our application with the prefix
app.use('/devis',demandeDevis);
app.use('/auth', authenticatejwt);


/// test Schema

/*
var devi = new models.Devi({
	title : 'title1',
	state : 'waiting'
});
console.log(devi);
*/

// =======================
// socket ======
// =======================

io.on('connection', function (socket) {
	console.log('user has connected');
	socket.on('disconnect',function(){
		console.log('user has disconnected');
	});
});
// =======================
// start the server ======
// =======================
server.listen(8080,function(){
	console.log('server listen on PORT = ',port);
});


