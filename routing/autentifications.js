/**
 * Created by abdo on 2016-03-31.
 */
var users = require('../controllers/users');
app.get('/signup',function(req,res){
	res.render('login.ejs',{message: req.flash('signupMessage') });
});

app.post('/signup',passport.authenticate('local-signup',{
	successRedirect : '/',
	failureRedirect: '/signup',
	failureFlash:true
}));

app.post('/login',passport.authenticate('local-login',{
	successRedirect : '/bord',
	failureRedirect: '/signup',
	failureFlash:true
}));

app.get('/bord',isLoggedIn,function(req,res){
	res.render('bord.ejs',{user : req.user});
});

app.get('/profil/:id',isLoggedIn,function(req,res){
	var options = {_id:req.params.id};
	var returnResponse = function(obj){
		if(obj.typeUser == 'client'){
			res.render('profilClient.ejs',{user : obj });

		}else{
			res.render('profil.ejs',{user : obj });
		}
	};
	models.User.findOneAsync(options)
		.then(logLib.logContent)
		.then(returnResponse)
	;
});



app.get('/logout',function(req,res){
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/signup');
};


