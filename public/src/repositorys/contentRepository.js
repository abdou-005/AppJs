/**
 * Created by abdo on 2016-03-02.
 */
'use strict';

app.service('contentRepository',function($http){

    this.getDomaines= function(cb){
        $http.get('/domaines').success(function(resp){
                console.log('i got the data I request');
                     /*for(var c in resp){
                     console.log(resp[c].name);
                     }*/
            console.log("resp = ",resp);
           return cb(resp);
         });
        return false;
    }

    this.createDomaine = function(d,cb){
        console.log(d);
        $http.post('/domaines',d).success(function(resp){
            console.log(resp);
            return cb(resp);
        });
        return false;
    }

    this.removeDomaine = function(id,cb){
        console.log(id);
        $http.delete('/domaines/' + id).success(function(resp){
            console.log('item deleted = ',resp);
            console.log(resp);
            return cb(resp);

        });
        return false;
    }
    this.editDomaine = function(id,cb){

        $http.get('/domaines/'+id).success(function(resp){
            console.log('resp = ',resp);
            return cb(resp);
        });
        return false;
    }

    this.updateDomaine = function(d,cb){
        console.log('Id Object et Object = ',d);
        $http.put('/domaines/',d).success(function(resp){
            console.log('resp = ',resp);
            return cb(resp);
        });
        return false;
    }

});
