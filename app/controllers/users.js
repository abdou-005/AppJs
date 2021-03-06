/**
 * Created by abdo on 2016-03-08.
 */

exports.index = function (req, res) {
	var returnResponse = function(collection){
		res.json(collection);
	};
	//models.User.find({}).sort({name : -1}).limit(2)select('name age lastname');
	/*models.User.findAsync()
		.then(function(collection){
			return collection.sort({name : -1}).limit(2);
		})
		.then(logLib.logContent)
		.then(returnResponse)
	;*/
	models.User.find({}).execAsync()
		//.then(logLib.logContent)
		.then(returnResponse)
	;
};
exports.one = function(req,res){
	var options = {_id:req.params.id};
	var returnResponse = function(obj){
		res.json(obj);
	};
	models.User.findOneAsync(options)
		.then(logLib.logContent)
		.then(returnResponse)
	;

};
exports.oneEmail = function(req,res){
	var options = {email:req.params.email};
	var returnResponse = function(obj){
		res.json(obj);
	};
	models.User.findOneAsync(options)
		.then(logLib.logContent)
		.then(returnResponse)
	;

};
exports.create = function(req,res){
	var returnResponse = function(obj){
		res.json(obj);
	};
	var returnError = function(){
		res.json({ success: false, message: 'Problem : password required or email exist' });
	};
	var user = new models.User(req.body);
	console.log(req.body);
	models.User(user).saveAsync()
		.catch(logLib.throwError)
		.then(logLib.logContent)
		.done(returnResponse,returnError)
	;
};
exports.update = function(req,res){
	var returnResponse = function(obj){
		res.json(obj);
	};
	var options = {_id:req.body._id};
	var returnUpdateObject = function(){
		models.User.findOneAsync(options)
			.then(logLib.logContent)
			.then(returnResponse)
		;
	};
	delete req.body._id;
	models.User.findOneAndUpdateAsync(options, req.body)
		.then(returnUpdateObject)
	;
};
exports.delete = function(req,res){
	var returnResponse = function(){
		res.json({message : 'All is fine'});
	};
	var returnError = function(){
		res.status(500).json({message : 'Problem'});
	};
	var options = {_id:req.params.id};
	models.User.findOneAndRemoveAsync(options)
		.catch(logLib.throwError)
		.done(returnResponse,returnError)
	;
};
