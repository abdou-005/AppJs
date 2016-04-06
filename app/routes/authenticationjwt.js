
var express = require('express');
var jwt =  require('jsonwebtoken');
var users = require('../controllers/users');

// get an instance of the router for api routes
var apiRoutes = express.Router();
// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.route('/authenticate')
	.post(function(req, res) {
		// find the user
		var email = req.body.email.toLowerCase();
		req.body.email = email;
		models.User.findOne({
			email: req.body.email
		}, function(err, user) {
			if (err) throw err;
			if (!user) {
				res.json({ success: false, message: 'Authentication failed. User not found.' });
			} else if (user) {

				// check if password matches
				if (user.password != req.body.password) {
					res.json({ success: false, message: 'Authentication failed. Wrong password.' });
				} else {

					// if user is found and password is right
					// create a token
					var token = jwt.sign(user, app.get('superSecret'), {
						expiresInSeconds: 2000 //  1440 expires in 24 hours
					});

					// return the information including token as JSON
					res.json({
						success: true,
						email : user.email,
						message: 'Enjoy your token!',
						token: token
					});
				}

			}

		});
	});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
			// check header or url parameters or post parameters for token
			var token = req.body.token || req.query.token || req.headers['x-access-token'];
			// decode token
			if (token) {
				// verifies secret and checks exp
				console.log('token existe');
				jwt.verify(token, app.get('superSecret'), function(err, decoded) {
					if (err) {
						return res.json({ success: false, message: 'Failed to authenticate token.' });
						console.log('Failed to authenticate token');
					} else {
						// if everything is good, save to request for use in other routes
						console.log('decode token');
						req.decoded = decoded;
						next();
					}
				});
			} else {
				console.log('Token not Existe');
				// if there is no token
				// return an error
				return res.status(403).send({
					success: false,
					message: 'No token provided.'
				});

			}
});
// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.route('/')
		.get(function(req, res) {
			console.log('Welcome to the coolest API on earth!');
			res.json({ message: 'Welcome to the coolest API on earth!' });

		});
// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.route('/token')
	.get(function(req, res) {
		console.log(req.query.token);
		res.json({ message: 'Welcome to the coolest API on earth!' });
	});
// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.route('/users')
	.get(users.index);
/*apiRoutes.route('/users')
		.get(function(req, res) {
			models.User.find({}, function(err, users) {
				res.json(users);
			});
		});*/

module.exports = apiRoutes;