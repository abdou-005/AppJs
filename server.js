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

//== configuration ===========================================
config = require('./config/main');// config files
var port     = process.env.PORT || 8080; // set our port
mongoose.connect(config.url);// connect to our mongoDB database
app.set('superSecret', config.secret); // secret variable
//== Initialize models =======================================
models = require('./app/Models');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
/*app.use(session({
	secret: 'PFE secret'
	//cookie: { expires : new Date(Date.now() + 60000) }

}));*/

// get all data/stuff of the body (POST) parameters
app.use(cookieParser());
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
require('./config/passport')(passport);
// =======================
// routes ================
// =======================

// basic route
app.post('/register', function(req, res) {
	console.log(req.body);
	// create a sample user
	var newUser = new models.User({
		email: 'foulen@hotmail.com',
		password: '123',
		typeUser: 'admin'
	});
	console.log(newUser);
	res.json({body : req.body, newUser : newUser});
	// save the sample user
	/*newUser.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
	});*/
});
//== routes ==================================================
//require('./app/routes/autentificationspassport')(passport);
require('./app/routes/users');
require('./app/routes/domaines');
require('./app/routes/offres');
require('./app/routes/avis');
// API ROUTES -------------------
var authenticatejwt = require('./app/routes/authenticationjwt');
// apply the routes to our application with the prefix
app.use('/api', authenticatejwt);

// =======================
// start the server ======
// =======================

app.listen(port,function(){
	console.log('server listen on PORT = ',port);
});
