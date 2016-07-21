'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'myApp.directives',
    'myApp.home',
    'myApp.contact',
    'myApp.work',
    'myApp.photo',
    'myApp.music'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])
.run(function($rootScope, $location, $routeParams, $window){
    $rootScope.$on('$routeChangeSuccess', function() {
            var output=$location.path()+"?";
            angular.forEach($routeParams,function(value,key){
                        output+=key+"="+value+"&";
                    })
            output=output.substr(0,output.length-1);
            ga('send', 'pageview', output);
        });
});
