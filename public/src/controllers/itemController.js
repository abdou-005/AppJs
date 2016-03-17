/**
 * Created by abdo on 2016-02-11.
 */
'use strict';


app
    .controller('itemList',function($scope,catProvider,itemProvider){


        var refrech = function(){
            catProvider.getCats(function(data){
              $scope.cats = data;
            });
            itemProvider.getItems(function(data){
                $scope.items = data;
                $scope.item = '';
            });
        };
        refrech();

        $scope.createItem = function(){
            itemProvider.createItem($scope.item,function(data){
            });
            refrech();

        };

        $scope.removeItem = function(id){
            itemProvider.removeItem(id,function(data){
            });
            refrech();
        };

        $scope.editItem = function(id){
            itemProvider.editItem(id,function(data){
                $scope.item = data;
            });
        };

        $scope.updateItem = function(){
            itemProvider.updateItem($scope.item._id,$scope.item,function(data){
            });
            refrech();
        };

        $scope.deselectItem = function(){
            $scope.item = '';
        };


    });

