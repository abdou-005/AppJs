/**
 * Created by abdo on 2016-02-12.
 */
'use strict';

app.config(
    function($routeProvider,$locationProvider){
        $routeProvider
            .when('/users',{
                controller:'homeCtrl',
                templateUrl:'views/home/home.html'
            })
            .when('/contents',{
                controller:'contentCtrl',
                templateUrl:'views/content/list.html'
            })
            .when('/items',{
                controller:'itemList',
                templateUrl:'views/item/list.html'
            })
            .when('/login',{
                controller : 'contactList',
                //templateUrl : 'views/contact/list.html'
            })
            .otherwise({redirectTo:'/'});
        $locationProvider.html5Mode({enabled : true, requireBase:false});
    }
);
