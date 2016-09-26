    angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('menu', {
            	url: "/",
                views:{
                    "scaffold":{
                        templateUrl: "app/components/scaffold/scaffold.html",
                        controller: "scaffoldCtrl as vm"
                    }
                }
            })
            .state('menu.home', {
                views: {
                    'contain': {
                        templateUrl: "app/components/home/home.html",
                        //controller: "homeCtrl as vm"
                    }
                }
            })
            .state('menu.series', {
                views: {
                    'contain': {
                        templateUrl: "app/components/series/series.html",
                        //controller: "homeCtrl as vm"
                    }
                }
            })


            $urlRouterProvider.otherwise("/");

    }])