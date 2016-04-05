/**
 * Created by abdo on 2016-02-12.
 */
'use strict';

app.config(
    function($routeProvider){
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
                controller:'itemListCtrl',
                templateUrl:'views/item/list.html'
            })
            .when('/items/create',{
                controller:'itemCreateCtrl',
                templateUrl:'views/item/create.html'
            })
            .when('/login',{
                redirectTo:'login.html'
            })
            .when('/demandeDevis',{
                controller : 'demandeDevisCtrl',
                templateUrl : 'views/devis/create.html'
            })
            .otherwise({redirectTo:'/'});
        //$locationProvider.html5Mode({enabled : true, requireBase:false });
    }
);
