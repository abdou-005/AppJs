/**
 * Created by abdo on 2016-03-09.
 */
'use strict'
app.service('homeRepository',function($http){

	this.getUsers = function(cb){
		$http.get('/users').success(function(resp){
			console.log("resp = ",resp);
			return cb(resp);
			console.log("resp = ",resp);
		});
		return false;
	};
	this.createUser = function(u,cb){
		console.log('-----user -----');
		console.log(u);
		console.log('-----user -----');
		$http.post('/users',u).success(function(resp){
			console.log(resp);
			return cb(resp);
		});
		return false;

	};
	this.removeUser = function(id,cb){
		$http.delete('/users/' +id).success(function(resp){
			console.log(resp);
			return cb(resp);
		});
		return false;
	};
	this.editUser = function(id,cb){
		$http.get('/users/' +id).success(function(resp){
			console.log(resp);
			return cb(resp);
		});
		return false;
	};
	this.updateUser = function (u,cb) {
		$http.put('/users/',u).success(function(resp){
			console.log(resp);
			return cb(resp);
		});
		return false;
	}

});
