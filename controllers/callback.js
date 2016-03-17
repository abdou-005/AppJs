/**
 * Index Action
 * @param req
 * @param res
 */
exports.index = function(req,res){
	var returnResponseOfFile = function (content){
		res.json(content);
	};
	var returnError = function(){
		res.send('Error',500);
	};
	fs.readFileAsync('test.json').
		then(logLib.logContent).
		then(JSON.parse).
		catch(logLib.throwError)
		.done(returnResponseOfFile,returnError)
	;
	console.log('autre chose');
};
