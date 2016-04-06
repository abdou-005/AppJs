/**
 * Created by abdo on 2016-02-11.
 */
'use strict';


app
    .controller('itemListCtrl',function($scope,homeProvider,contentProvider){


        var refrech = function(){
            homeProvider.getUsers(function(data){
              $scope.users = data;
            });
            contentProvider.getDomaines(function(data){
                $scope.domaines = data;

            });
        };
        refrech();

    })
    .controller('itemCreateCtrl',function($scope,contentProvider){

        var socket = io.connect('http://localhost:8080');
    var refrech = function(){
        contentProvider.getDomaines(function(data){
            $scope.domaines = data;

        });
    };
    refrech();

    });

