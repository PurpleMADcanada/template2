'use strict';

angular.module('myApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'modules/work/work.html',
    controller: 'WorkCtrl'
  });
}])
.controller('WorkCtrl', ['$scope', '$animate', function($scope, $animate) {
    $scope.animationClass = "slide-up"

    $scope.works = [
        {
            name: "Oxford",
            img: "imgs/oxford.png",
			exerp: "The application is developed for Record Management converting Oxford’s manual file management process to automated, with a bar-code scanner application for users to borrow, return and transfer the files."
        },
        {
            name: "Gbc",
            img: "imgs/gbc.png",
			exerp: "Deciding where to pursue your post-secondary education is one of the most important decisions you’ll make. George Brown College helps you develop the technical skills needed to get the job done and the people skills employers tell us they expect when looking to hire new graduates."
        },
        {
            name: 'Automotive',
            img: "imgs/portf_auto_steward.jpg"
        },
        {
           name: "Bitcoin",
           img: "imgs/portf_bitocoin.jpg"
        },
        {
            name: "Gienow",
            img: "imgs/portf_gienow.jpg"
        }
    ]
}]);
