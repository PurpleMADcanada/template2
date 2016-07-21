'use strict';

angular.module('myApp.photo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photo', {
    templateUrl: 'modules/photo/photo.html',
    controller: 'PhotoCtrl'
  });
}])

.controller('PhotoCtrl', [function() {

}]);
