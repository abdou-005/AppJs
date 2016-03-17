/**
 * Created by abdo on 2016-03-02.
 */
'use strict';
app.service('itemRepository',function($http){

    this.getItems = function(cb){
        $http.get('/items').success(function(resp){
            console.log("resp = ",resp);
            return cb(resp);
        });
        return false;
    }

    this.createItem = function(item,cb){
        $http.post('/items',item).success(function(resp){
            console.log('resp = ',resp);
            return cb(resp);
        });
        return false;
    }
    this.removeItem = function(id,cb){
        $http.delete('/items/'+id).success(function(resp){
            console.log('resp = ',resp)
            return cb(resp);
        });
        return false;
    }
    this.editItem = function(id,cb){
        $http.get('/items/'+id).success(function(resp){
            return cb(resp);
        });
    }
    this.updateItem = function(id,item,cb){
        $http.put('/items/'+id,item).success(function(resp){
            return cb(resp);
        });
    }
});