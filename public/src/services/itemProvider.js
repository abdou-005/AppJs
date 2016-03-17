/**
 * Created by abdo on 2016-02-12.
 */
'use strict';


app.service('itemProvider', function(itemRepository){

    this.getItems = function(cb){
        itemRepository.getItems(function(data){
           return cb(data);
        });
    }


    this.createItem = function(item,cb){
        itemRepository.createItem(item,function(data){
            return cb(data);
        });

    }

    this.removeItem = function(id,cb){
        itemRepository.removeItem(id,function(data){
            return cb(data);
        });
    }
    this.editItem = function(id,cb){
       itemRepository.editItem(id,function(data){
           return cb(data);
       });
    }
    this.updateItem = function(id,item,cb){
       itemRepository.updateItem(id,item,function(data){
            return cb(data);
       });
    }
});