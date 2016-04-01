/**
 * Created by abdo on 2016-03-17.
 */
var localStrategy = require('passport-local').Strategy;

module.exports = function(passport){

	passport.serializeUser(function(user,done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id,done){
		models.User.findById(id,function(err,user){
			done(err,user);
		});
	});

	passport.use('local-signup', new localStrategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true
	},
		function(req,email,password,done){
			process.nextTick(function(){
				models.User.findOne({'email':email},function(err,user){
					if(err)
						return done(err);
					if(user){
						return done(null,false,req.flash('signupMessage','that email already taken'))

					}else{
						var user = new models.User(req.body);
						user.save(function(err){
							if(err)
								throw err;
							return done(null,user);
						})
					}
				})
			});
		}));

	passport.use('local-login', new localStrategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true

	},
		function(req,email,password,done){
			process.nextTick(function(){
				models.User.findOne({'email':email},function(err,user){
					if(err)
						return done(err);
					if(!user)
						return done(null, false, req.flash('signupMessage','No User found'));
					if(user.password != password)
						return done(null, false,req.flash('signupMessage','invalid password'));
					return done(null,user);
				});
			});
		}));
};