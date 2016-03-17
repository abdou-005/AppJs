/**
 * Created by abdo on 2016-03-02.
 */
'use strict';

app.service('contactProvider',function(contactRepository){

    this.getBooks = function(cb){
        contactRepository.getBooks(function(data){
            console.log('data = ',data);
           return cb(data);
        });
    }
});