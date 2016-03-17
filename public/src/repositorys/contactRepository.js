/**
 * Created by abdo on 2016-03-02.
 */
'use strict';
app.service('contactRepository',function($http){


    this.getBooks = function(cb){
            $http.get('books').success(function(data){
                console.log('data = ',data);
                return cb(data);
            });
        return false;
    }
});