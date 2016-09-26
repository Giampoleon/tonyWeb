    angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('home', {
            	url: "/home",
                views:{
                    "scaffold":{
                        templateUrl: "app/components/scaffold/scaffold.html",
                        controller: "scaffoldCtrl as vm"
                    }
                }
            })

            $urlRouterProvider.otherwise("home");

    }])