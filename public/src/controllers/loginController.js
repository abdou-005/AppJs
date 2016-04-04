'use strict';

app
	.controller('loginCtrl',function($scope,$http){


		$scope.loginUser = function(){
			console.log($scope.user);
			$http.post('/api/authenticate',$scope.user).success(function(resp){
				console.log(resp);
				$scope.message = resp;
				$scope.token = resp.token;
			});
		};
		$scope.registerUser = function(){

			$http.post('/register',$scope.user).success(function(resp){
					console.log(resp);
					$scope.message = resp;
				});


		};
		$scope.getToken = function(){
			var token = {token:$scope.token};
			console.log(token);
			$http.get('/api/token?token='+$scope.token).success(function(resp){
				console.log(resp);
				$scope.message = resp;
			});
		};
		$scope.deselect = function(){
			$scope.user = '';
		}
	});
